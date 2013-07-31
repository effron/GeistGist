# Sessions Template

This should only be used once you are comfortable with creating an authentication and authorization system yourself.
This app is purely to save time on projects where writing out a login system becomes tedious.


CSS Notes
===

###Images
* `display: block` photos as blocks
* `height: auto`, and `width: 100%`
####Tagging the image
* absolute positioning: get the tag on top of the picture
```
.tag{
  position: absolute
  width: 90px;
  height: 90px;
  background: transparent;
}
```
* with this, adding `margin: auto` to the photo ruins the placement of the tag
* will then be positioned next to the next static element (always be thinking about an elements ancestors when using absolute)
* instead: `position: relative` on the photo
#####In line styles
* These will overwrite the stylesheet
```
<div class="tag" style="top: 40px; left: 130px;"></div>
```
* instead of inline styles, add with jquery:
```
$('.tag').css({
  top: 40px;
  left: 130px;
})
```
#####Mouse positions
```
var x = event.pageX
var y = event.pageY
```
* But don't use pixels for x and y, use percentages, based on the parent container. Instead:
```
var x = event.pageX - photo.offset().left;
var y = event.pageY - photo.offset().right;
```
* since this will give the click coordinates, change the margins in the css of the display rectangle, to center it on the click
Store percentages:
```
var x = parseFloat((event.pageX - photo.offset().left) / photo.width()) * 100;
var y = parseFloat((event.pageY - photo.offset().right) / photo.height()) * 100;
```
