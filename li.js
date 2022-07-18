let data = "apiKey=FxInv50WlpCdL5hTQUrYB3C6hVRgABrFMyEhqcm0qacXUx3K8oDgMtiH85FO";
let xhr = new XMLHttpRequest()
xhr.withCredentials = false

window.onload = init

function init() {
    // выходим, если функция уже выполнялась
    if (arguments.callee.done) return
    
    // устанавливаем флаг, чтобы функция не исполнялась дважды
    arguments.callee.done = true
    
    xhr.open("POST", "https://lk.calldog.ru/apiCalls/userInfo")
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

    xhr.send(data)
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            let balCD = JSON.parse(this.responseText).data.balance
            $('.calldog').html(`${balCD}`)
        }
        })
}


