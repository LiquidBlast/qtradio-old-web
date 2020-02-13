document.oncontextmenu=RightMouseDown;
function RightMouseDown() { return false; }

function openInNewTab(url) {
    let win = window.open(url, '_blank');
    win.focus();
}