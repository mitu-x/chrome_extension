let url = location.href
let sendMessage = {
    goSend:true
}
if (url === 'http://chongqing.chinatax.gov.cn/cqtax/') {
    chrome.runtime.sendMessage(sendMessage, function () {
        console.log("开启定时任务...");
    })
}

const createBox = (request)=>{
    //  请求成功
    if (request.success){
        console.log(request.msg)
    }
    //  请求失败
    else {

    }
}


/**
 * 监听消息
 */
chrome.runtime.onMessage.addListener(
    function (request) {
        if (request){
            createBox(request)
        }
    }
);

/*
const doc = document.getElementsByTagName('body')
doc[0].appendChild(css)

const box = document.createElement('box')
box.innerHTML = `

`*/
