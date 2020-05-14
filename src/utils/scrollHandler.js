const ScrollHandler = {
    disabled: false,
    position: 0,
    min: 0,
    max: -1000,
    init: () => {
        window.addEventListener('wheel', e => {

            if (ScrollHandler.disabled) {
                e.stopPropagation();
                return;
            }

            ScrollHandler.position -= e.deltaY;

            if (ScrollHandler.position > ScrollHandler.min) {
                ScrollHandler.position = ScrollHandler.min;
            }

            if (ScrollHandler.position < (ScrollHandler.max + window.innerHeight)) {
                ScrollHandler.position = ScrollHandler.max + window.innerHeight;
            }

            PubSub.publish('APP-SCROLL', ScrollHandler.position)
        })
    },
    setMax: (max) => ScrollHandler.max = (max * -1),
    disable: () => ScrollHandler.disabled = true,
    enable: () => ScrollHandler.disabled = false
}

export default ScrollHandler;