
chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "发送通知"
});

chrome.contextMenus.onClicked.addListener(function (){
    //点击右键中的发送通知
    chrome.notifications.create('notice',{
        type: 'basic',
        title: 'Notification title',
        message: 'Notification message',
        iconUrl:"images/icon.png"
    });
})


