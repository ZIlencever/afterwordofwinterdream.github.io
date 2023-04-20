
document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 15 + "px";

// // 根据不同的屏幕获取字体大小
// if (document.documentElement.clientWidth > 800) {
//     document.getElementsByTagName("html")[0].style.fontSize = "26px";
// } else {
//     document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 15 + "px";

// }
// //改变窗口的时候重新计算大小
// window.onresize = function () {
//     if (document.documentElement.clientWidth > 800) {
//         document.getElementsByTagName("html")[0].style.fontSize = "26px";
//     } else {
//         document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 15 + "px";
//     }
// }


// window.onload = function () {
//     try {
//         let dom = document.getElementsByClassName('in')[0]
//         dom.style.display = 'block'
//         setTimeout(function () {
//             dom.style.display = 'none'
//         }, 1600);
//     } catch (error) {

//     }

// }


function go (url) {
    $(".to").show();
    setTimeout(function () {
        window.location.replace(url);
    }, 1000);
}

function hide (className) {
    console.log($(className));

    $(className).hide()
}



