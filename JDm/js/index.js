/**
 * Created by Administrator on 2017/6/6.
 */
window.onload = function(){

    search();
    secondkill();
    scrollpic();
    slider();
};
//Í·²¿ËÑË÷
var search = function () {
    var search = document.getElementsByClassName("jd_header_box")[0];
    var banner = document.getElementsByClassName("jd_banner")[0];
    var height = banner.offsetHeight;

    window.onscroll = function () {
        var top = document.body.scrollTop;
        if(top>height){
            search.style.background = "rgba(201,21,35,0.85)"
        }else{
            var op = top/height*0.85;
            search.style.background = "rgba(201,21,35,"+op+")"
        }
    };
};
//ÃëÉ±
var secondkill = function(){
    var parenttime = document.getElementsByClassName("sk_time")[0];
    var timelist = parenttime.getElementsByClassName("num");
    console.log(timelist.length);
    var times = 4*60*60;
    setInterval(function () {
        times --;
        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;
        //console.log(h+"-"+m+"-"+s);
        timelist[0].innerHTML = h>10?Math.floor(h/10):0;
        timelist[1].innerHTML = h%10;
        timelist[2].innerHTML = m>10?Math.floor(m/10):0;
        timelist[3].innerHTML = m%10;
        timelist[4].innerHTML = s>10?Math.floor(s/10):0;
        timelist[5].innerHTML = s%10;
    },1000);
};
//ÂÖ²¥Í¼
var scrollpic = function () {
    var banner = document.getElementsByClassName("jd_banner")[0];
    var width = banner.offsetWidth;
    var imgbox = banner.getElementsByTagName("ul")[0];
    var pointbox = banner.getElementsByTagName("ul")[1];
    var pointlist = pointbox.getElementsByTagName("li");
    var index = 1;
    var timer;

    var addtransition = function () {
        imgbox.style.transition = "all 0.3s ease 0s";
        imgbox.style.webkitTransiton = "all 0.3s ease 0s";
    };
    var romovetransition = function () {
        imgbox.style.transition = "none";
        imgbox.style.webkitTransiton = "none";
    };
    var settransform = function (t) {
        imgbox.style.transform = "translateX("+t+"px)";
        imgbox.style.webkitTransform = "translateX("+t+"px)";
    };

    timer = setInterval(function () {
        index++;
        addtransition();
        settransform(-index*width);
    },5000);
    imgbox.addEventListener("transitionEnd", function () {
        console.log("big");
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index =  8;
        }
        romovetransition();
        settransform(-index*width);
    },false);
    imgbox.addEventListener("webkitTransitionEnd", function () {
        console.log("big");
        if(index >= 9){
            index = 1;
        }else if(index <= 0){
            index =  8;
        }
        romovetransition();
        settransform(-index*width);
    },false);
};
