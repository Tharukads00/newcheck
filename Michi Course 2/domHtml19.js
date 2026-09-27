//The function is based on the fetching the data from the fake website

function fakeFetch(url){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        status: 200,
        statusText: 'OK',
        url: 'https://example.com/' + url,
        text: () => Promise.resolve('It was a bright cold day in April.')
      })
    },200);
  });
}


fakeFetch('book.txt').then((response)=>{
  console.log('status'+ response.status);
  console.log('url : '+ response.url);
  return response.text();
}).then((txt)=>{
  console.log("text "+txt);
}).catch((err)=>{
  console.log("error : "+ err);
})