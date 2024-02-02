
const $CaptureScreenBtn = document.querySelector('.CaptureScreen') // 截屏按钮


$CaptureScreenBtn.addEventListener('click', function () {

    chrome.desktopCapture.chooseDesktopMedia(['screen'], function(streamId) {
        console.log(streamId)
    });


    // 获取当前窗口 -> 回调函数包括当前窗口的详细信息，如窗口id等
    // chrome.windows.getCurrent(function (win) {
    //     // 抓取当前tab的内容
    //     chrome.tabs.captureVisibleTab(win.id, {}, function (dataUrl) {
    //         // chrome.runtime.sendMessage({go: 1, id: win.id, data: dataUrl}, function (response) {
    //         // })
    //
    //
    //
    //     })
    // })
})
