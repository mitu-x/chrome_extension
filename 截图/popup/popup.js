let btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "send"}, function (response) {
            console.log(response);
        });
    });
})