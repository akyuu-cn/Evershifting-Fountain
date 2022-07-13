var cate = document.getElementsByClassName('category row nomargin-x');
let source = cate;

order=["日影","月华","星宿","共振","光辉"]
let temp=""

for (let i=0; i<order.length;i++){
    console.log("i="+i)
    for (let ii = 0; ii < order.length; ii++) {
        console.log("ii="+ii)
        if (source[ii].innerHTML.indexOf(order[i]) != -1){
            console.log("true")
            temp=temp+source[ii].outerHTML;
        }
    }
    
}


document.getElementsByClassName("category-list").innerHTML = temp

console.log(temp)
console.log(cate)