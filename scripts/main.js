//点击变换图片
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/bb1.jpg') {
        myImage.setAttribute('src', 'images/bb2.jpg');
    } else {
        myImage.setAttribute('src', 'images/bb1.jpg');
    }
}
