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
h1, p {
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
