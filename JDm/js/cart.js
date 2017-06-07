/**
 * Created by Administrator on 2017/6/7.
 */
window.onload = function () {
    checkbox();
    deletefuc();
};
var checkbox = function () {
    var checkboxlist = document.getElementsByClassName("jd_check_box");
    console.log(checkboxlist.length);
    for(var i = 0;i<checkboxlist.length;i++){
        checkboxlist[i].onclick = function () {
            var checked = this.getAttribute("checked");
            if(checked !== null){
                this.removeAttribute("checked");
            }else{
                this.setAttribute("checked","");
            }
        }

    }
};

var deletefuc = function () {
    var deletelist = document.getElementsByClassName("delete_box");
    var win = document.getElementsByClassName("jd_win")[0];
    var winbox = document.getElementsByClassName("jd_win_box")[0];
    console.log(deletelist.length);
    for(var i = 0;i<deletelist.length;i++){
        deletelist[i].onclick = function () {
        win.style.display = "block";
            winbox.className = "jd_win_box jumpout clearfix"
        }
    }
    winbox.getElementsByClassName("cancel")[0].onclick = function () {
        win.style.display = "none";
        winbox.className = "jd_win_box clearfix"
    }
    winbox.getElementsByClassName("submit")[0].onclick = function () {
        win.style.display = "none";
        winbox.className = "jd_win_box clearfix"
    }

};