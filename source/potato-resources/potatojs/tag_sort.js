
//
// 标签置顶 - 在标签页面执行，使含有特殊标记的标签置顶。
//


if (document.title.split(" - ")[0] == "标签") {

    let tagElements = document.getElementsByClassName("text-center tagcloud")[0]
    tag = tagElements.children

    const highlight_word = "☆"

    let temp = ""

    for (let i = 0; i < tag.length; i++) {
        if (tag[i].innerHTML.indexOf(highlight_word) == 0) {
            temp += tag[i].outerHTML
            tag[i].outerHTML = null
        }
    }


    for (let i = 0; i < tag.length; i++) {
        temp = temp + tag[i].outerHTML
    }

    tagElements.innerHTML = temp

}