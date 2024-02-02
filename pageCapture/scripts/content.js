let url = 'https://www.cnblogs.com/dreamman/p/17076363.html'
let localURL = location.href
console.log(localURL.length)
console.log( url.length)
console.log( url === localURL)
if (url === localURL){

    chrome.runtime.sendMessage({greeting: true} , response => {
        console.log(123)
    })
}
