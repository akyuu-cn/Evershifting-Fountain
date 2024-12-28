// 如果当前页面为404页，删除页脚
if (document.title.split(" - ")[0] == 404) {
    document.querySelector('footer').innerHTML = null
    console.log("热力猫你坏事做尽！");
}


// 自动排序 - 在分类页面执行，使分类按照指定顺序排序。
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



// 标签置顶 - 在标签页面执行，使含有特殊标记的标签置顶。
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


// 手机端导航栏标题简化
!(function () {
    if (isPhone()) {
        a = document.querySelectorAll("div.navbar-brand strong")
        a[0].innerHTML = "Evershifting Fountain"
    }

    function isPhone() {
        var info = navigator.userAgent
        var isPhone = /mobile/i.test(info)
        return isPhone
    }
})()


// 打印欢迎信息
setTimeout(() => {
    console.log(`
Welcome to:

   ('-.        (\`-.      ('-.  _  .-')    .-')    ('-. .-.                     .-') _               .-') _             
 _(  OO)     _(OO  )_  _(  OO)( \\( -O )  ( OO ). ( OO )  /                    (  OO) )             ( OO ) )            
(,------.,--(_/   ,. \\(,------.,------. (_)---\\_),--. ,--.  ,-.-')    ,------./     '._ ,-.-') ,--./ ,--,'  ,----.     
 |  .---'\\   \\   /(__/ |  .---'|   /\`. '/    _ | |  | |  |  |  |OO)('-| _.---'|'--...__)|  |OO)|   \\ |  |\\ '  .-./-')  
 |  |     \\   \\ /   /  |  |    |  /  | |\\  :\` \`. |   .|  |  |  |  \\(OO|(_\\    '--.  .--'|  |  \\|    \\|  | )|  |_( O- ) 
(|  '--.   \\   '   /, (|  '--. |  |_.' | '..\`''.)|       |  |  |(_//  |  '--.    |  |   |  |(_/|  .     |/ |  | .--, \\ 
 |  .--'    \\     /__) |  .--' |  .  '.'.-._)   \\|  .-.  | ,|  |_.'\\_)|  .--'    |  |  ,|  |_.'|  |\\    | (|  | '. (_/ 
 |  \`---.    \\   /     |  \`---.|  |\\  \\ \\       /|  | |  |(_|  |     \\|  |_)     |  | (_|  |   |  | \\   |  |  '--'  |  
 \`------'     \`-'      \`------'\`--' '--' \`-----' \`--' \`--'  \`--'      \`--'       \`--'   \`--'   \`--'  \`--'   \`------'   
                                          .-') _  .-') _      ('-.                  .-') _                             
                                         ( OO ) )(  OO) )    ( OO ).-.             ( OO ) )                            
   ,------. .-'),-----.  ,--. ,--.   ,--./ ,--,' /     '._   / . --. /  ,-.-') ,--./ ,--,'                             
('-| _.---'( OO'  .-.  ' |  | |  |   |   \\ |  |\\ |'--...__)  | \\-.  \\   |  |OO)|   \\ |  |\\                             
(OO|(_\\    /   |  | |  | |  | | .-') |    \\|  | )'--.  .--'.-'-'  |  |  |  |  \\|    \\|  | )                            
/  |  '--. \\_) |  |\\|  | |  |_|( OO )|  .     |/    |  |    \\| |_.'  |  |  |(_/|  .     |/                             
\\_)|  .--'   \\ |  | |  | |  | | \`-' /|  |\\    |     |  |     |  .-.  | ,|  |_.'|  |\\    |                              
  \\|  |_)     \`'  '-'  '('  '-'(_.-' |  | \\   |     |  |     |  | |  |(_|  |   |  | \\   |                              
   \`--'         \`-----'   \`-----'    \`--'  \`--'     \`--'     \`--' \`--'  \`--'   \`--'  \`--'                              

Powered by Hexo & Fluid & Amazing Potato!

`)
}, "2000")