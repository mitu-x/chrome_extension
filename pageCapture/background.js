// 消息群集
// chrome.runtime.onMessage.addListener(onRuntimeMessage)
//
// // 监听runtime消息
// /**
//  * @param {*} request
//  * @param {*} sender
//  * @param {*} sendResponse
//  */
// function onRuntimeMessage (request, sender, sendResponse) {
//     if (request.go){
//         chrome.desktopCapture.chooseDesktopMedia(
//             ['widow'],
//             request.id,
//             (streamId,options)=>{
//                 console.log(streamId)
//                 console.log(options)
//             }
//         )
//     }
// }

//插件安装的时候 打开默认网页
chrome.runtime.onInstalled.addListener(({reason}) => {
    if (reason === 'install') {
        chrome.tabs.create({
            url: "onboarding.html"
        },function (tab) {
            console.log(tab);
        });
    }
});

chrome.action.onClicked.addListener(
        function (tab){
            console.log(tab)
        }

)




