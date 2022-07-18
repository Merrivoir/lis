// WARNING: For POST requests, body is set to null by browsers.
let data = "apiKey=FxInv50WlpCdL5hTQUrYB3C6hVRgABrFMyEhqcm0qacXUx3K8oDgMtiH85FO";
let balCD
let xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    balCD = JSON.parse(this.responseText).data.balance;
    $('.calldog').html(`${balCD}`)
  }
});

xhr.open("POST", "https://lk.calldog.ru/apiCalls/userInfo");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);

