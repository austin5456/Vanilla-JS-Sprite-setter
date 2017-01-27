# Vanilla-JS-Sprite-setter
A Vanilla Js plugin that allows you to set the background of social media sprites.

Assuming you have properly set the elements in Css and don't want to create 6 classes and 6 pseudo classes for transitions (or more)
and want to keep your Css DRY you can use this plugin.
You must already have a horizontal sprite image similar to the one I'm using. 

The function has five parameters, it takes in strings for the variables you want to set, the first two take in the dimensions
of the individual element in the sprite you want to use ( so if you're using a  700px wide sprite with seven icons in it stuck to 
eachother your width would be 100px) if there is a small gap between them pelase do the math. The sprite height is the ammout it's going to transition on hover, if you don't want or have 
anything to transition to leave it at 0. Then you specify the transition speed you would like, the next parameter is the parent 
element you're using, and finally the url of the image.

makeSprite(wdth, hgth, dlay, parentid, path);

so in my case it would look like this:

makeSprite("28", "-28", "550", "jSocial", "../Imgs/tryit.png");

28px is the individual social icon, -28 is where I want ti transitioned to, 550 is the transition speed i want, jSocial is the id 
of the parent UL and finally "../Imgs/tryit.png" is the path.

This is the first plugin I've made so if you find any errors or find a better way to do it please let me know, thanks.
