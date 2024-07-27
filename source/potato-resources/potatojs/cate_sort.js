
//
// 自动排序 - 在分类页面执行，使分类按照指定顺序排序。
//


if (document.title.split(" - ")[0] == "分类") {

    let cate = document.getElementsByClassName('category row nomargin-x');

    const order = ["日影", "月华", "共振", "星宿", "光辉"]
    let temp = ""

    for (let i = 0; i < order.length; i++) {
        for (let ii = 0; ii < order.length; ii++) {
            if (cate[ii].innerHTML.indexOf(order[i]) != -1) {
                temp = temp + cate[ii].outerHTML;
            }
        }

    }

    document.getElementsByClassName("category-list")[0].innerHTML = temp

}