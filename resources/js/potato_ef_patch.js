// 如果当前页面为404页，删除页脚
if (document.title.split(" - ")[0] == 404) {
    document.querySelector('footer').innerHTML = null
    console.log("热力猫你坏事做尽！")
}


// 自动排序 - 在分类页面执行，使分类按照指定顺序排序。
if (document.title.split(" - ")[0] == "分类") {

    let category = Array.from(document.getElementsByClassName('category'))

    const order = ["日影", "月华", "共振", "星宿", "光辉"]
    const description = ["随手记点啥的分类", "记录自己探索过程的分类", "与开发相关的分类", "与现实世界里的故事相关的分类", "公告/发布相关的分类"]
    let _ = ""

    order.forEach(name => {
        let target = category.find(element => { return element.children[0].getAttribute("title") == name })
        let node = document.createElement("div")
        node.innerHTML = `~ ${description[order.indexOf(name)]}`
        node.style.opacity = 0.6
        node.style.marginLeft = "0.5rem"
        node.style.marginRight = "0.5rem"
        node.style.fontSize = "16px"
        node.style.fontWeight = "lighter"
        node.style.marginTop = "0.3rem"
        target.children[0].insertBefore(node, target.children[0].children[1])
        _ += target.outerHTML
    })

    document.getElementsByClassName("category-list")[0].innerHTML = _

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