
//
// 如果当前页面为404页，删除页脚（为了美观
//

if (document.title.split(" - ")[0] == 404){
document.querySelector('footer').innerHTML=null
console.log("热力猫你坏事做尽！");
}

