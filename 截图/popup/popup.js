// const $CaptureScreenBtn = $('.CaptureScreen') // 截屏按钮
const $CaptureScreenBtn = document.querySelector('.CaptureScreen') // 截屏按钮

$CaptureScreenBtn.addEventListener('click',function (){
    // 获取当前窗口 -> 回调函数包括当前窗口的详细信息，如窗口id等
    chrome.windows.getCurrent(function (win) {
        // 抓取当前tab的内容
        chrome.tabs.captureVisibleTab(win.id, {}, function (dataUrl) {
            let a = document.createElement('a');
            a.download = new Date().valueOf()+'.jpg'
            let img = document.createElement('img');
            a.href=dataUrl
            a.appendChild(img)
            a.click()
        })
    })
})
