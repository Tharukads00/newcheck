// ===== YOUR TASK =====
// Make the thumbnail gallery swap the main image when a thumbnail is
// clicked. Full details are in the problem description.
//
// TODO: select all .thumb images and #main-view, then add a click listener
//       to each thumbnail that copies its src into #main-view.

const thumbnails = document.querySelectorAll('.thumb');
const mainView = document.querySelector('#main-view');

for (const img of thumbnails){

    function imgClick(){
        newSrc = img.getAttribute('src');
        mainView.setAttribute('src', newSrc);
    }



    img.addEventListener("click", imgClick)
}