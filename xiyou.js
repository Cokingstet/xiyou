// 根据按钮的类名查找按钮（选择其中一个独特的类名）
const buttonElement = document.querySelector('.detailBtn___WFeQj');

// 创建一个显示调试信息的浮动窗口
const debugWindow = document.createElement('pre');
debugWindow.style.position = 'fixed';
debugWindow.style.top = '0';
debugWindow.style.right = '0';
debugWindow.style.backgroundColor = 'white';
debugWindow.style.zIndex = '9999';
document.body.appendChild(debugWindow);

// 在浮动窗口中显示调试信息
function logDebugInfo(info) {
    debugWindow.innerHTML += `${info}<br>`;
}

// 检查是否找到了按钮元素
if (buttonElement) {
    // 为按钮添加点击事件监听器
    buttonElement.addEventListener('click', () => {
        logDebugInfo('按钮已被点击');
    });

    // 触发按钮的点击事件
    logDebugInfo('找到按钮，点击它');
    buttonElement.click();
} else {
    logDebugInfo('未找到按钮元素');
}
