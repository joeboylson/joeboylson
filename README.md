# WEB GAME DEVELOPMENT (002) : Fall 2019

_SEE IT RUNNING https://web-game-development.herokuapp.com/_

---

This repository was originally meant to only hold the code for a few assignments. But I wanted some way for a a user to actually come and see these projects running. I had previously worked with Heroku for other projects, so I used the same method for this projects. 

My idea is to create an application that "wraps" around all the projects. I also wanted it to be somewhat dynamic in the sense that I do not have to go in and add a new link to a new project. Being dynamic is not super important for this use case (because there will be < 10 projects by the end), but I wanted to do it this way because I believe its the better way to think about creating apps, whataver the use case is.

I also wanted to use React - because React is cool.

---

### THE API:

The api is as simple as it can get. It contains 2 endpints: 1 for serving index.html and the other to return a list of projects.

In the api, I make each project folder "public" - this way we can navigate to it (important later).

---

### THE CLIENT:

The client side is also very simple. I started from the create-react-app, added only 3 new components: App, Nav, and Iframe.

App requests the project urls from the API and passes these urls to the nav. A variable called "currentProject" is also filled based on which project you are viewing. This "currentProject" renders through an iframe - which is possible because we previously made all our project folders public.

Nav takes each project url and renders out 3 links - the link to switch the iframe, the link to view the full html page (without an iframe), and a link to the folder in this githubv repository.

Iframe is pretty self-explanatory. It takes a url and renders an iframe with the url as its source.

---

And so now, anyone can see whatever new projects I might add - the code is free to see and completely public, and each project is rendered within this very simple application. As I said before, this is hosted with Heroku which is also very easy to use.

I hope you enjoy these fun little games as much as I have enjoyed creating them.
