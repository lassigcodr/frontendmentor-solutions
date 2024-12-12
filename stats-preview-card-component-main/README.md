# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](Capture.jpg)


### Links

- Solution: [Click here](https://github.com/ctrlwisdom/frontendmentor-newbie-challenge/tree/main/stats-preview-card-component-main)
- Live Site: [Click here](https://ctrlwisdom.github.io/frontendmentor-newbie-challenge/stats-preview-card-component-main/index.html)

## My process

When I looked at the design for the desktop it was a layout that appeared to be in a rows and columns in different layers, so i used the css grid system. For mobile i used "text-align: center;" for all text content. And used grid areas to position the image in the accurate position for the desktop and mobile version. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

To overlay color over image you would have to set the width and height to 100%, set position of ovelay to absolute, top 0, left 0 and for it not cover the whole view window to set the parent position to relative. 

To see how you can add code snippets, see below:

```html
<div class="img-container">
  <picture>
    <source srcset="images/image-header-mobile.jpg" media="(max-width: 600px)" class="hero-image">
    <img src="images/image-header-desktop.jpg" alt="image of people in a work environment" class="hero-image">
  </picture>
  <div class="overlay"></div>
</div>
```
```css
.img-container {
    position: relative;
}

.overlay {
    background-color: hsla(277, 80%, 35%, 0.54);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```


## Author

- Frontend Mentor - [@ctrlwisdom](https://www.frontendmentor.io/profile/ctrlwisdom)
- Twitter - [@ctrlwisdom](https://www.twitter.com/ctrlwisdom)

