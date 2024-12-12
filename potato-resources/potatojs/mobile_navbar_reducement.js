if(isPhone()){
    a = document.querySelectorAll("div.navbar-brand strong")
    a[0].innerHTML = "Evershifting Fountain"
}



function isPhone (){
    var info = navigator.userAgent
    var isPhone = /mobile/i.test(info)
    return isPhone
    }