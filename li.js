// WARNING: For POST requests, body is set to null by browsers.
window.onload = init;
function init() {
    // выходим, если функция уже выполнялась
    if (arguments.callee.done) return;
    
    // устанавливаем флаг, чтобы функция не исполнялась дважды
    arguments.callee.done = true;
    
    let data = "apiKey=FxInv50WlpCdL5hTQUrYB3C6hVRgABrFMyEhqcm0qacXUx3K8oDgMtiH85FO";
    let balCD
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.open("POST", "https://lk.calldog.ru/apiCalls/userInfo");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            balCD = JSON.parse(this.responseText).data.balance;
            $('.calldog').html(`${balCD}`)
        }
        });
};
    


