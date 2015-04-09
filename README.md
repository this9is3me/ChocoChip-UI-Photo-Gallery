# ChocoChip-UI-Photo-Gallery
A simple photo gallery created using ChocolateChip UI.<br>
<h2>Features:</h2>
- Able to retrieve and display an image from its URL.
- Able to delete images from grid view.

<h2>Components:</h2>
- 3 sections: login, main page and log out page. All 3 sections within index.html
- I populated the main page using main.js.

<h2>Notes:</h2>
Apparently, ChocolateChip Version 3.5.2 does not allow re-initialisation of $.UIDeletable as the function returns nothing. 
Hence it seems impossible to delete items in an updated list. I go around it by adding the deletion-indicator for each ```html <li> ``` in the list in main.js below.
```html
function listImages(id) {
    $("#list1").append("<li data-id='" + id + "'>" +
                       '<span class="deletion-indicator"></span>' + ...
}
```
I used Fancybox API to open and close images with transition.
I used the grid arrangement of images by ChocolateChip so that by having a list within this class, it deletes images in grid view, although each image is in each ```html <li>````.
```html
<article id='main' class='next'>
    <section>
        ...
        <ul class='image-grid list' id='list1'>
        <!-- Populated by main.js -->
        </ul>
    </section>
</article>
```
I modify 2 statements below in chui-3.5.2.js to allow deletion using deletion-indicator, instead of a delete button.
```html
          list.find('li').prepend(deletionIndicator);
          //Remove delete button
line 1516 //list.find('li').append(deleteButton);
          ...
          /****************** Change to .deletion-indicator from .delete **************************/
line 1563 $(list).on('singletap', '.deletion-indicator', function() {
          ...
          }
```
I modify the css which can be found in custom.css to prevent the grid box from going out of shape when click on delete indicator. This is due to the way chui.css formatted the deletion-indicator.
```html
.list.deletable > li.selected{
  margin-right: 0;
}
````
I changed the deletion indicator's position onto the image so that it appears on the image.
```html
.list li> .deletion-indicator{
  position: absolute;
  ...
}
````
