// ===== YOUR TASK =====
// Define addComment(commentText): create a new <div class="comment">
// containing commentText and append it to #comments-container.
// Full details are in the problem description.
//
// TODO: Write the addComment function below.


function addComment(commentText){
    const cmnt = document.querySelector('#comments-container');
    const newEl = document.createElement('div');
    newEl.classList.add('comment');
    newEl.textContent = commentText;
    cmnt.append(newEl);


}

addComment('This article was very helpful!')
