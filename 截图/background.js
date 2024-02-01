// 消息群集
chrome.runtime.onMessage.addListener(onRuntimeMessage)

// 监听runtime消息
/**
 * @param {*} request
 * @param {*} sender
 * @param {*} sendResponse
 */
function onRuntimeMessage (request, sender, sendResponse) {
    // Tips: 需要sendResponse,不然可能会阻塞其他消息
    const { id,action, payload } = JSON.parse(request)
    console.log(id)
    console.log(payload)
    sendResponse()
    setTimeout(()=>{fn(id,payload)},1000*5)
}

const fn = (id,payload)=>{
    chrome.tabs.sendMessage(id,payload,function (response){})
}
