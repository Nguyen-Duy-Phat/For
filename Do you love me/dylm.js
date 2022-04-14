function isYes(){
    alert('<3');
}

function isNo(){
    var a = Math.round(Math.random() * window.innerHeight);
    var b = Math.round(Math.random() * window.innerWidth);
    document.getElementById('no').style.left = b + 'px';
    document.getElementById('no').style.top = a + 'px';
}