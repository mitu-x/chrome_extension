chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({"text": "123"}).then()
})


chrome.notifications.create({
    type: 'basic',
    iconUrl: 'images/icon.png',
    title: 'Notification title',
    message: 'Notification message'
});
