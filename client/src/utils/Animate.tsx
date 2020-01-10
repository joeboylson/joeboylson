import React from 'react';

export interface AnimateProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  effect: string;
  hide?: string;
  animateOut?: Boolean;
  delay?: number;
  animateOnLoad?: Boolean;
}

const Animate: React.FC<AnimateProps> = (Props) => {

  // fix this
  const overrideAnimation = true;

  // element ref for DOM
  const elementRef:any = React.useRef(null)
  
  // state: if element is in in viewport
  const [inViewport, setInViewport] = React.useState(false)

  // function to change `inViewport` state
  const changeSetInViewPort = () => {
    if (elementRef.current) {
      let { height, y } = elementRef.current.getBoundingClientRect()
      setInViewport(y > 0 && (y+height < window.innerHeight))
    }
  }

  const elementClasses = () => {
    if (overrideAnimation) {
      return `${Props.className} ${Props.effect}`;
    }
    if (elementRef.current) {
      if (inViewport) { elementRef.current.classList.add(Props.effect) }
      else if (!inViewport && Props.animateOut) { elementRef.current.classList.remove(Props.effect) } 
      return elementRef.current.classList;
    } 
    return `${Props.className} ${inViewport ? Props.effect : (Props.hide || 'animate-hidden') }`;
  }

  // set if element is in viewport when page renders
  React.useEffect(() => {
    changeSetInViewPort()
  }, [elementRef])

  // set if element is in viewport when page scrolls
  document.body.addEventListener('scroll', changeSetInViewPort)

  const delayStyle = {
    animationDelay: `${Props.delay}s`
  } as React.CSSProperties

  return (
    <div 
      style={{...Props.style, ...delayStyle}}
      className={ elementClasses() }
      ref={elementRef}
      onClick={Props.onClick}
    >{Props.children}</div>
  )
}

export default Animate;