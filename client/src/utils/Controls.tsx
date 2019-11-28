const openNewTab = (url:string) => {
  let win:any = window.open(url, '_blank');
  return win.focus();
}

export {openNewTab};