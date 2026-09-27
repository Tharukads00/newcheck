// A helper is provided for you: splitIntoWords(text) takes a string and returns
// an array of the words in it. It trims the text and splits on any run of
// whitespace (spaces, tabs, or new lines), so "a  b\nc" becomes ["a", "b", "c"].
function splitIntoWords(text) {
    return text.trim().split(/\s+/);
}


function counterBookWords(){
    const url = 'book.txt';
    const result  = document.querySelector('#result');
    fetch(url).then((response)=> response.text()).then((text)=>{
        let txt_arr = splitIntoWords(text);
        result.textContent = 'This book has ' + txt_arr.length + ' words.'
    }).catch((err)=>{
        console.log("Failed to load the book");
        console.log(err);
        result.textContent = 'Failed to load the book.';

    })
}

counterBookWords();