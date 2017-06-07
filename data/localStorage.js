/**
 * Created by laplap on 2017/6/5.
 */

// //save按钮
// function addLocal() {
//     var storage = window.localStorage;
//     if(storage.getItem("u3594_img")==null){
//         alert("save complete");
//         saveToStorage();
//     }else{
//         alert("this game is already exist");
//     }
// }

//添加缓存
function saveToStorage() {

    //localStorage
    if(window.localStorage) {
        if(document.getElementById("u3596_img")!=undefined){
            var stormblood  = document.getElementById("u3596_img").src;
            window.localStorage.setItem("u3596_img", stormblood);
        }
        if(document.getElementById("u3092_img")!=undefined) {
            var motogp = document.getElementById("u3092_img").src;
            window.localStorage.setItem("u3092_img", motogp);
        }
        if(document.getElementById("u2924_img")!=undefined) {
            var dirt4 = document.getElementById("u2924_img").src;
            window.localStorage.setItem("u2924_img", dirt4);
        }
		if(document.getElementById("u2756_img")!=undefined) {
            var morrowind = document.getElementById("u2756_img").src;
            window.localStorage.setItem("u2756_img", morrowind);
        }
		if(document.getElementById("u2588_img")!=undefined) {
            var tekken7 = document.getElementById("u2588_img").src;
            window.localStorage.setItem("u2588_img", tekken7);
        }
		if(document.getElementById("u2420_img")!=undefined) {
            var tekken7pc = document.getElementById("u2420_img").src;
            window.localStorage.setItem("u2420_img", tekken7pc);
        }
		if(document.getElementById("u3428_img")!=undefined) {
            var batman = document.getElementById("u3428_img").src;
            window.localStorage.setItem("u3428_img", batman);
        }
		if(document.getElementById("u3260_img")!=undefined) {
            var battlegrounds = document.getElementById("u3260_img").src;
            window.localStorage.setItem("u3260_img", battlegrounds);
        }
		if(document.getElementById("u2252_img")!=undefined) {
            var nightmares = document.getElementById("u2252_img").src;
            window.localStorage.setItem("u2252_img", nightmares);
        }
		if(document.getElementById("u1916_img")!=undefined) {
            var prey = document.getElementById("u1916_img").src;
            window.localStorage.setItem("u1916_img", prey);
        }
		if(document.getElementById("u2084_img")!=undefined) {
            var dawnofwar = document.getElementById("u2084_img").src;
            window.localStorage.setItem("u2084_img", dawnofwar);
        }
		if(document.getElementById("u1748_img")!=undefined) {
            var risingstorm = document.getElementById("u1748_img").src;
            window.localStorage.setItem("u1748_img", risingstorm);
        }
		
		
		
		
		
    } else {
        // 不支持 sessionStorage，用 Dojo 实现相同功能
    }

}



var u1560_img = document.getElementById("u1560_img");
var u1562_img = document.getElementById("u1562_img");
var u1564_img = document.getElementById("u1564_img");
var u1566_img = document.getElementById("u1566_img");
var u1568_img = document.getElementById("u1568_img");
var u1570_img = document.getElementById("u1570_img");
var u1572_img = document.getElementById("u1572_img");
var u1574_img = document.getElementById("u1574_img");
var u1576_img = document.getElementById("u1576_img");
var u1578_img = document.getElementById("u1578_img");
var u1582_img = document.getElementById("u1582_img");
var u1580_img = document.getElementById("u1580_img");


window.onload = function() {

    if(window.localStorage) {
        var stormblood = window.localStorage.getItem("u3596_img");
        if(stormblood!= "" || stormblood != null) {
            u1560_img.src = stormblood;
        }
        var motogp = window.localStorage.getItem("u3092_img");
        if(motogp!= "" || motogp != null) {
            u1562_img.src = motogp;
        }
        var dirt4 = window.localStorage.getItem("u2924_img");
        if(dirt4!= "" || dirt4 != null) {
            u1564_img.src = dirt4;
        }
        var morrowind = window.localStorage.getItem("u2756_img");
        if(morrowind!= "" || morrowind != null) {
            u1566_img.src = morrowind;
        }
        var tekken7 = window.localStorage.getItem("u2588_img");
        if(tekken7!= "" || tekken7 != null) {
            u1570_img.src = tekken7;
        }
        var tekken7pc = window.localStorage.getItem("u2420_img");
        if(tekken7pc!= "" || tekken7pc != null) {
            u1568_img.src = tekken7pc;
        }
        var batman = window.localStorage.getItem("u3428_img");
        if(batman!= "" || batman != null) {
            u1572_img.src = batman;
        }
        var battleground = window.localStorage.getItem("u3260_img");
        if(battleground!= "" || battleground != null) {
            u1576_img.src = battleground;
        }
        var nightmares = window.localStorage.getItem("u2252_img");
        if(nightmares!= "" || nightmares != null) {
            u1574_img.src = nightmares;
        }
        var prey = window.localStorage.getItem("u1916_img");
        if(prey!= "" || prey != null) {
            u1578_img.src = prey;
        }
        var dawnofwar = window.localStorage.getItem("u2084_img");
        if(dawnofwar!= "" || dawnofwar != null) {
            u1582_img.src = dawnofwar;
        }
        var risingstorm = window.localStorage.getItem("u1748_img");
        if(risingstorm!= "" || risingstorm != null) {
            u1580_img.src = risingstorm;
        }
    }
};

//remove按钮
function clearLocalStorage(){
    clickCount();
    alert("success");
}
var clickNum = 0;
function clickCount() {
    clickNum++;
    if(clickNum==1){
        u1560_img.remove();
        localStorage.removeItem('u3596_img')
    }
    if(clickNum==2){
        u1562_img.remove();
        localStorage.removeItem('u3092_img')
    }
    if(clickNum==3){
        u1564_img.remove();
        localStorage.removeItem('u2924_img')
    }
    if(clickNum==4){
        u1566_img.remove();
        localStorage.removeItem('u2756_img')
    }
    if(clickNum==5){
        u1570_img.remove();
        localStorage.removeItem('u2588_img')
    }
    if(clickNum==6){
        u1568_img.remove();
        localStorage.removeItem('u2420_img')
    }
    if(clickNum==7){
        u1572_img.remove();
        localStorage.removeItem('u3428_img')
    }
    if(clickNum==8){
        u1576_img.remove();
        localStorage.removeItem('u3260_img')
    }
    if(clickNum==9){
        u1574_img.remove();
        localStorage.removeItem('u2252_img')
    }
    if(clickNum==10){
        u1578_img.remove();
        localStorage.removeItem('u1916_img')
    }
    if(clickNum==11){
        u1582_img.remove();
        localStorage.removeItem('u2084_img')
    }
    if(clickNum==12){
        u1580_img.remove();
        localStorage.removeItem('u1748_img')
    }
    if(clickNum==13){
        clickNum = 0;
    }
}
//remove all
function clearLocalStorageALL() {
    alert("Remove All Success");
    location.reload();
    localStorage.clear();
}