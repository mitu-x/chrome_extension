chrome.runtime:提供与插件运行时环境交互的功能，包括管理插件的生命周期、发送消息、注册事件监听器等。

chrome.extension:这个 API 已被废弃，不推荐使用。它提供了一些与插件相关的功能，例如获取插件的 URL、向页面注入脚本等。相应的功能可以使用 chrome.runtime 替代。

chrome.tabs: 允许与浏览器标签页进行交互，包括获取当前标签页信息、打开新标签页、切换标签页、执行脚本等。

chrome.windows: 允许与浏览器窗口进行交互，包括获取当前窗口信息、打开新窗口、切换窗口、调整窗口大小等。

chrome.storage: 提供持久化存储功能，用于在插件中保存和检索数据，包括使用

chrome.storage.local : 进行本地存储和 chrome.storage.sync 进行跨设备同步。

chrome.runtime.sendMessage: 用于在插件组件之间发送消息，可以实现不同组件之间的通信和数据传递。

chrome.runtime.onMessage:注册消息监听器，用于接收其他组件发送的消息，并进行相应的处理。

chrome.browserAction:允许在浏览器工具栏中创建图标按钮，并定义与按钮相关的交互行为，例如点击按钮时打开弹出窗口或执行特定操作。

chrome.contextMenus: 允许在浏览器右键菜单中添加自定义菜单项，并定义菜单项的点击行为。

chrome.webRequest: 允许拦截和修改网络请求，包括请求的头部、URL、响应内容等，以实现网络请求的修改和过滤。

chrome.notifications:允许在操作系统通知区域显示通知，以向用户发送系统级别的提示和提醒。

chrome.identity: 提供身份验证和用户信息相关的功能，例如使用 OAuth2 进行用户身份验证。