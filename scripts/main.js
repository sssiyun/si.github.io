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

//个性化欢迎语
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Nice to meet you, ' + myName;
    }
  }

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nice to meet you, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }