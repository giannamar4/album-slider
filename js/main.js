'use strict'

$(function(){
    // settings for slider
    // we need to know the width of the slide so that we know how far it should slide
    var width=720;
    // it takes 2 seconds to transition between slides
    var animatedSpeed = 2000;
    // jQuery will queue up actions and events so it makes sure that you add your animatedSpeed to the pause or it will keep running
    var pause = animatedSpeed + 500
    var currentSlide = 1

    // cache DOM elements
    var $slideContainer = $('.slides')
    var $slides = $('.slide')

    var interval;
    // create a function that will start the slider
    function startSlider(){
        interval = setInterval(function(){
            // animating the slideContainer will cause the action in the brackets, targeting the css
            $slideContainer.animate({'margin-left': '-='+ width},animatedSpeed, function(){
// animating the slideCOntainer will cause the action in the brackets targeting the css
// it will do this animation after 'this' long
// we can run a call back function at the end if we choose to

// we track the slide we are on
currentSlide++
// this happens after the animation, so if the length is greater than the slides(6) we reset to 1.
// since slide 1 is the first and last slide on the desk the user wont notice when we reset back to slide 1
if(currentSlide===$slides.length){
    currentSlide =1;
    $slideContainer.css('margin-left',0)
}
            })
            // it will repeat its action every 'this' often
        }, pause)
    }

    // create a function that will remove the slider
    function pauseSlider(){
        clearInterval(interval)
    }
    // start the slider
    startSlider();

    // if the mouse hovers over the slide then the animation stops and then if leaves it starts again
    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider)
})
