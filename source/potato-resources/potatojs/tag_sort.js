
//
// 标签置顶 - 在标签页面执行，使含有特殊标记的标签置顶。
//


if (document.title.split(" - ")[0] == "标签") {

    var tag = document.getElementsByClassName("text-center tagcloud");
    tag = tag[0].children

    var highlight_word="☆"

    let temp = ""


    for (let i = 0; i < tag.length; i++) {
        if(tag[i].innerHTML.indexOf(highlight_word)==0){
            console.log(tag[i].innerHTML)
            temp=temp+tag[i].outerHTML
            tag[i].outerHTML=null
        }
    }
   

    for (let i = 0; i<tag.length; i++){
        temp=temp+tag[i].outerHTML
    }

    document.getElementsByClassName("text-center tagcloud")[0].innerHTML = temp

}