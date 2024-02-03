function setColor(set) {
    return function() {
        if(set) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
    };
}

window.onload = function() {
    let toggle = true; // Assuming 'toggle' might be used to enable/disable setColor functionality
    document.getElementById('btn').onclick = setColor(toggle);
}
