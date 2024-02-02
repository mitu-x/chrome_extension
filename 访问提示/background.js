

// 官网--搜索--信箱--执法--
let urls = [

]

//发起请求

let queryURL = function (item, tabId) {
    //向具体的url发起请求
    fetch(item.url).then(r => {
        //请求成功
        if (r.status === 200) {
            //向页面发送消息
            chrome.tabs.sendMessage(
                tabId,
                {
                    name:item.name,
                    success: true,
                    msg: "请求成功"
                },
                function () {
                }
            )
        }
        //请求失败
        else {
            //向页面发送消息
            chrome.tabs.sendMessage(
                tabId,
                {
                    name:item.name,
                    success: false,
                    msg: "请求失败"
                },
                function () {
                }
            )
        }
    })
}


chrome.runtime.onMessage.addListener(
    function (request, sender,) {
        console.log("来消息了")
        if (request.goSend) {
            // 开启定时任务  发送请求
            setInterval(
                function () {
                    urls.forEach(
                        (item) => {
                            queryURL(item, sender.tab.id)
                        }
                    )
                }
                ,
                1000 * 60
            )
        }
    }
);


