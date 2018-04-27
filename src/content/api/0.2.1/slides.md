---
previewUrl: "/docs/docs-content/api/0.2.1/slides-demo.html"
---
# ion-slides

The Slides component is a multi-section container. Each section can be swiped
or dragged between. It contains any number of [Slide](../Slide) components.


```
Adopted from Swiper.js:
The most modern mobile touch slider and framework with
hardware accelerated transitions.

http://www.idangero.us/swiper/

Copyright 2016, Vladimir Kharlampidi
The iDangero.us
http://www.idangero.us/

Licensed under MIT
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>options</h3> 
<strong>Attribute:</strong>  <code>options</code>
<strong>Type:</strong> <code>any</code>
</dt>
<dd>Options to pass to the swiper instance.
See http://idangero.us/swiper/api/ for valid options</dd>

<dt>
<h3>pager</h3> 
<strong>Attribute:</strong>  <code>pager</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>Show or hide the pager</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionSlideDidChange</h3></dt>
<dd>Emitted after the active slide has changed.</dd>

<dt>
<h3>ionSlideDrag</h3></dt>
<dd>Emitted when the slider is actively being moved.</dd>

<dt>
<h3>ionSlideNextEnd</h3></dt>
<dd>Emitted when the next slide has ended.</dd>

<dt>
<h3>ionSlideNextStart</h3></dt>
<dd>Emitted when the next slide has started.</dd>

<dt>
<h3>ionSlidePrevEnd</h3></dt>
<dd>Emitted when the previous slide has ended.</dd>

<dt>
<h3>ionSlidePrevStart</h3></dt>
<dd>Emitted when the previous slide has started.</dd>

<dt>
<h3>ionSlideReachEnd</h3></dt>
<dd>Emitted when the slider is at the last slide.</dd>

<dt>
<h3>ionSlideReachStart</h3></dt>
<dd>Emitted when the slider is at its initial position.</dd>

<dt>
<h3>ionSlideTouchEnd</h3></dt>
<dd>Emitted when the user releases the touch.</dd>

<dt>
<h3>ionSlideTouchStart</h3></dt>
<dd>Emitted when the user first touches the slider.</dd>

<dt>
<h3>ionSlideTransitionEnd</h3></dt>
<dd>Emitted when the slide transition has ended.</dd>

<dt>
<h3>ionSlideTransitionStart</h3></dt>
<dd>Emitted when the slide transition has started.</dd>

<dt>
<h3>ionSlideWillChange</h3></dt>
<dd>Emitted before the active slide has changed.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>getActiveIndex()</h3></dt>
<dd>Get the index of the active slide.</dd>

<dt><h3>getPreviousIndex()</h3></dt>
<dd>Get the index of the previous slide.</dd>

<dt><h3>isBeginning()</h3></dt>
<dd>Get whether or not the current slide is the first slide.</dd>

<dt><h3>isEnd()</h3></dt>
<dd>Get whether or not the current slide is the last slide.</dd>

<dt><h3>length()</h3></dt>
<dd>Get the total number of slides.</dd>

<dt><h3>lockSwipes()</h3></dt>
<dd>Lock or unlock the ability to slide to change slides.</dd>

<dt><h3>lockSwipeToNext()</h3></dt>
<dd>Lock or unlock the ability to slide to the next slides.</dd>

<dt><h3>lockSwipeToPrev()</h3></dt>
<dd>Lock or unlock the ability to slide to the previous slides.</dd>

<dt><h3>slideNext()</h3></dt>
<dd>Transition to the next slide.</dd>

<dt><h3>slidePrev()</h3></dt>
<dd>Transition to the previous slide.</dd>

<dt><h3>slideTo()</h3></dt>
<dd>Transition to the specified slide.</dd>

<dt><h3>startAutoplay()</h3></dt>
<dd>Start auto play.</dd>

<dt><h3>stopAutoplay()</h3></dt>
<dd>Stop auto play.</dd>

<dt><h3>update()</h3></dt>
<dd>Update the underlying slider implementation. Call this if you've added or removed
child slides.</dd>

</dl>


