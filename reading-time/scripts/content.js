const a = document.querySelectorAll("a");


if (a) {
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = 'red';
    }
}

chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["page"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "sampleContextMenu") {
        console.log("Sample Context Menu clicked.");


    }
});

