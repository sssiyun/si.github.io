function bw() {
    if (getComputedStyle(document.documentElement).getPropertyValue('--white').trim() == '#fff') {
        document.documentElement.style.setProperty('--white', '#000000');
        document.documentElement.style.setProperty('--black', 'rgba(250, 250, 244, 0.973)');
    } else {
        document.documentElement.style.setProperty('--white', '#fff');
        document.documentElement.style.setProperty('--black', '#000000');
    }
}

document.getElementById('blackwhite').addEventListener('click', function(event) {
    bw();
}, false);


