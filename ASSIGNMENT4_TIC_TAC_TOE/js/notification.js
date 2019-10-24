class GameNotification {

  constructor(message) {

    this.id = (+ new Date()).toString();

    let body = document.createElement('div');
    body.id = this.id
    body.classList.add('notification');
    body.classList.add('fade-in');

    let text = document.createElement('p');
    text.innerHTML = message;

    body.appendChild(text);
    document.body.appendChild(body);
    
    setTimeout(() => {
      body.classList.remove('fade-in');
    }, 2000)

    setTimeout(() => {
      var element = document.getElementById(this.id);
      element.parentNode.removeChild(element);
    }, 2500)

  }

}