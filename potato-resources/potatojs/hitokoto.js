!(async function () {
    const response = await fetch('https://v1.hitokoto.cn?c=a&c=b&c=c&c=d&c=e&c=f&c=g&c=h&c=i&c=j&c=k')
    const { uuid, hitokoto: hitokotoText } = await response.json()
    const hitokoto = document.querySelector('#hitokoto')
    hitokoto.href = `https://hitokoto.cn/?uuid=${uuid}`
    hitokoto.innerText = hitokotoText
})()