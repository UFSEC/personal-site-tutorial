# personal-site-tutorial
A tutorial that introduces web basics and how to make your very own online portfolio.
You will be making a responsive, static website.
## Intro to web basics 
###### start here if you have 0 experience

This tutorial serves as a guide to create a responsive static website, one that
does not load new content. Static websites only display text and images and are
considered the most basic type of websites. These are coded in HTML and CSS (and JavaScript if you wanna be fancy) and show
the same information to every user, unlike sites such as Facebook, Amazon and Twitter (or any real web application), which
constantly update and show new/different content to each user.

A responsive website is one that changes depending on what kind of device is accessing
it. For example, a website should look different if a phone is accessing it, compared to a
tablet, a laptop and a desktop. To build a responsive website, we will be using Twitter
Bootstrap, a CSS framework created by Twitter to do this easily.

##### A little about website structure

From the most basic level, websites are composed of HTML (HyperText Markup
Language) along with CSS (Cascading Style Sheets) for styling your website. HTML is a markup
language (not a programming language) that defines the structure of the webpage. It is
basically the skeleton of a website. HTML uses tags to declare certain elements in a
webpage. For instance a header element uses an “h1” tag (shown below) to tell the
browser that a header is in between the tags. It will then render any text between the
opening and closing tags in a large and bold manner.

```html
<h1>Hello World!</h1>
```

Common HTML tags include `<h1>`, `<img>`, `<body>`, `<p>` `<a>`, and
`<div>`. Which respectively denote a heading, an image, the body of a webpage,
paragraph text, a link, and a sectional division.

CSS is a style sheet language used to add style to HTML elements. For example if you
simply wanted to make the header red in your website you could do so with CSS, as
shown below. There is much more you can do with CSS, but this is just a basic example.

```css
h1 {
 color: red;
}
```
The above code would go at the very top of a CSS file. There is no "main" function or anything like that. "h1" is called a *selector* which is used to select (wow rly?) certain HTML elements that you would like to assign certain style attributes to (e.g. whatever you have within the {}'s).

Now, if you had multiple `<h1>` tags on your site they would all become red. CSS
has a solution for this. Which is using classes and ids to identify specific HTML elements.
A class can be assigned to multiple elements, while an id can only uniquely identify one
element.   

For example:

```html
<h1 class=”mine”>Hello World</h1>
<a class="mine" href="https://github.com/UFSEC">hiiii</a>
```
and in your CSS file:
```css
.mine {
 color: green;
}
```
The dot in front of “mine” means that the selector is referring to a class, where as “#mine” would refer to an id called "mine". Now only HTML elements with the class "mine" will become green.

[Bootstrap](http://getbootstrap.com/) is essentially a collection of CSS styles & classes which adapts HTML elements when
viewed on different devices. It also provides a number of helpful CSS classes, and allows you take make nice looking websites without writing too much of your own CSS.

## Tutorial
####Skeleton
I have provided a starting point for you to construct a website for Albert the gator. To follow along, download this repo and start with the files in the folder: `starter-skeleton`

This skeleton starts you off with a basic landing page for Albert the gator's site with a basic bootstrap nav-bar, a centered image and `Hello, World!` text.

####About
Create a new `<div>` with `id="about"` and `class="container"` below `<div id="home">`".  
This is going to be the **about** section of our page. We are going to give it a header and then a couple paragraphs describing ourselves.  

Throw the below code at the top of `<div id="about" class="container>`
```html
<div class="page-header">
  <h1>About me...</h1>
</div>
```
This just makes a shell with nice spacing to house our title. [More info @ bootstrap docs](http://getbootstrap.com/components/#page-header).

Next, add the following CSS to your `styles.css` file to change the font color of our text, since white looks better than black on this background.

```css
h1, h2, h3, h4, h5, h6, a, p {
	color: white;
}
```

Now, outside of the `<div class="page-header">` but still in the **about** section, add a `<p>` tag and type out as much information describing yourself as you'd like.  Don't forget to close the paragraph tag like this: `</p>`

Here's my code for that section: (I just have a bunch of junk [Lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) text. Copy it if you'd like.)
```html
<div id="about" class="container">
  <div class="page-header">
    <h1>About me...</h1>
  </div>
  <p>
    Hey my name is Albert! I'm the mascot for UF. I'm pretty cool and a 1337 programmer and stuff.
    <br/><br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum dolor massa, id consequat nisl maximus at. Nunc leo tellus, ornare eget scelerisque nec, tincidunt at mi. Aliquam dapibus porttitor purus, non luctus ex interdum ullamcorper. Nullam sapien ante, laoreet non mattis non, scelerisque vel nunc. Phasellus cursus mollis varius. Sed interdum libero quis orci tincidunt viverra. In laoreet auctor ante, vel sagittis odio porttitor at. Suspendisse sit amet sem auctor felis egestas aliquet. Mauris consequat bibendum est sit amet scelerisque. Cras accumsan nisl ligula, ut faucibus odio posuere eu.
    <br/><br/> 
    Pellentesque sollicitudin nulla et tortor efficitur, quis sagittis lectus consequat. Suspendisse efficitur nec tellus quis suscipit. Ut hendrerit eleifend metus vitae pharetra. Fusce posuere semper nulla, et scelerisque turpis viverra a. Morbi cursus tortor at finibus bibendum. Donec maximus suscipit ipsum. Sed accumsan justo dictum tristique cursus. Nunc fringilla posuere imperdiet.    
  </p>
</div>
```
####Work Experience
Now we are going to create a **work experience** section for Albert. Copy and paste the same container code that you have for your **about** section, but discarding your "about" text, changing the `<h1>` and giving this div an `id="work"`. It should look like this:
```html
<div id="work" class="container">
  <div class="page-header">
    <h1>Work experience</h1>
  </div>
</div>
```

Now, we're going to use a bootstrap [list group](http://getbootstrap.com/components/#list-group) to list our work experience. Copy & paste the code from the bootstrap's website (link above) right below your "pade-header" div to create a list of jobs.

This section should look like this now:
![screenshot](https://gyazo.com/8c18b6e6223ca57cef6a246f14a9b8a7.png)

Lets change the text and add some jobs now. I'm going to have a total of 3 jobs. I am also gonna add some [http://getbootstrap.com/components/#badges](bootstrap badge's) to denote the time spent at each job.

Finally, the code for this section looks like this:

```html
    <div id="work" class="container">
      <div class="page-header">
        <h1>Work experience</h1>
      </div>
      <ul class="list-group">
        <li class="list-group-item">Lead developer at UF Software Engineering Club<span class="badge">Present</span></li>
        <li class="list-group-item">UF Bookstore<span class="badge">2 years</span></li>
        <li class="list-group-item">McDonald's Crew Member<span class="badge">7 years</span></li>
      </ul>
    </div>
```

####Projects

Since Albert is a programmer, he definitely needs a **projects** section to showcase his work and impress technical recruiters who come across his site.

Again, copy and paste the same container code that you have for your **about** and **work experience** sections, but discarding the contents other than the `page-header`, changing the `<h1>` and giving this div an `id="projects"`. It should look like this:

```html
    <div id="projects" class="container">
      <div class="page-header">
        <h1>Projects</h1>
      </div>
    </div>
```

We are going to list out 3 projects that Albert has developed. I want to have all 3 projects in one row. Each having an image and a title + description below its respective image. On a desktop view it will look like this:

![projects](https://gyazo.com/5904de1ff8b709f611d32eabf39f9921.png)

On mobile, since there is normally not enough screen width to display all 3 projects side by side in a row. It would be desirable to collapse each project underneath the previous in one column. We can accomplish this easily with bootstrap's [grid layout](http://getbootstrap.com/css/#grid).

Here is the code for this section implementing the grid layout and with all of the data for the projects:
```html
    <div id="projects" class="container">
      <div class="page-header">
        <h1>Projects</h1>
      </div>
      <!--Bootstrap grid layout-->
      <div class="row">
        <div class="col-md-4">
          <img src="img/gatorway.webp" class="img-responsive">
          <h3>
            <a href="https://play.google.com/store/apps/details?id=com.guidebook.apps.GatorWay.android&hl=en" target="_blank">UF GatorWay App</a>
            </h3>
          <p>I developed the GatorWay app for both iOS and Android. "GatorWay is the official app of New Student and Family Programs in the Dean of Students Office at the University of Florida. GatorWay lets you download guides to various events including: Preview, Weeks of Welcome, and Family Weekend."</p>
        </div>

        <div class="col-md-4">
          <img src="img/isis.jpg" height="280" width="280" class="img-responsive img-rounded">
          <br/>
          <h3>
            <a href="https://www.isis.ufl.edu/" target="_blank">isis.ufl.edu website</a>
          </h3>
          <p> I developed the isis website for university of florida students. This site is the online hub for students. It allows students to register for classes, view grades, transcripts, and a whole bunch more.</p>
        </div>

        <div class="col-md-4">
          <img src="img/transloc.webp" class="img-responsive">
          <h3>
            <a href="https://play.google.com/store/apps/details?id=com.transloc.android.rider&hl=en" target="_blank">TransLoc Rider App</a>
          </h3>
          <p> I developed the TransLoc Rider app for Android. It allows students to track the bus system in Gainesville so they are able to get to class in time! It provides real time bus locations and ETAs. 
          </p>      
        </div>
      </div>
    </div>
```

As you see I have three `<div class="col-md-4">`'s inside of a `<div class="row">`.  Each row has 12 columns. The `<div class="col-md-4">` creates a column of length 4 for "medium" sized devices (Desktops (≥992px). 4 x 3 = a total of 12 columns. For non-medium sized devices such as phones/tables, these `<div class="col-md-4">`'s get wrapped onto a new line. For more info, checkout [bootstrap's docs](http://getbootstrap.com/css/#grid).

Too see how the **projects** section looks on a mobile device, open the chrome developer tools.  

`ctrl+shift+j` on Windows or `cmd+option+j` on Mac. 

Click on the little [phone icon](http://cdn.sixrevisions.com/500-03-smartphone-icon-highlighted.png) in the very top left hand corner of the developer tools window. This will bring up [device mode](https://developer.chrome.com/devtools/docs/device-mode). Where you can view your site on all different devices. Select an iPhone or something, then refresh the page to interact with your site.

####Blinking cursor animation
The site is practically done. But lets add a little "blinking cursor" animation. It's going to look like this:
![cursor](https://gyazo.com/5bcfff2123a0d48bc1a93cb98714cedc.gif)  

First add the below `<span>` element right after the "Hello, World!" text in your `<h1>` tag (still inside this `<h1>` tag though).
```html
<span id="cursor">|</span>
```
Now, we are going to use some JavaScript (and [jQuery](https://en.wikipedia.org/wiki/JQuery)) to animate this "|" so it looks like its blinking. Open your `script.js` file and paste the following function right at the top of the file. 

```javascript
function cursorAnimation() {
	$('#cursor').animate({
	    opacity: 0
	}, 'fast', 'swing').animate({
	    opacity: 1
	}, 'fast', 'swing');
}
```
This function first selects any HTML element(s) with an id of `cursor` (aka our cursor!) Then calls [jQuery's .animate()](http://api.jquery.com/animate/) function on it. Which just sets the opacity to 0 (invisible) and then brings it back to 1.  

(You don't really need to understand entirely whats going on. Alot of software development is utilizing other people's code and resources to accomplish your goal. For example, I didn't write this from scratch. I got the idea from [here](http://codepen.io/stathisg/pen/Bkvhg))

Now, paste the below code above your `cursorAnimation()` function in your `script.js` file.

```javascript
$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
});
```

This function calls [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval), passing in our `cursorAnimation()` function and a value of 800ms. This essentially calls `cursorAnimation()` every 800ms, giving the cursor a blinking effect!

The `$( document ).ready()` is a jQuery function, which is kind of like a "main method". Basically, once the page is loaded and ready to be manipulated it executes whatever code is inside of it. More info [here](https://learn.jquery.com/using-jquery-core/document-ready/).

