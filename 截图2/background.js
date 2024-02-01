// 消息群集
chrome.runtime.onMessage.addListener(onRuntimeMessage)

// 监听runtime消息
/**
 * @param {*} request
 * @param {*} sender
 * @param {*} sendResponse
 */
function onRuntimeMessage (request, sender, sendResponse) {
    if (request.go){
        chrome.desktopCapture.chooseDesktopMedia(
            ['widow'],
            request.id,
            (streamId,options)=>{
                console.log(streamId)
                console.log(options)
            }
        )
    }
}

