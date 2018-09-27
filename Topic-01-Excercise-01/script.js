window.onload = function () { 
    let element = document.getElementsByClassName("hidden");
    element[0].style.visibility = 'visible';            
}
let config = {
    method: 'GET',
    url: 'http://api.icndb.com/jokes/random'
  };
  
function onButtonClick()
{
    let request = obj =>  {
        return new Promise((resolve, reject) =>  {
            let xhr =  new XMLHttpRequest();
            xhr.open(config.method, config.url);
            if(obj.headers) {
                Object.keys(obj.headers).forEach(key => {
                    xhr.setRequestHeader(key, obj.headers[key]);
                });
            }
            xhr.onload = () => {
                if(xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(obj.body);
        });
    };
    request(config)
    .then(data => {
        let response = JSON.parse(data);                         
        document.getElementById("response").innerText = response.value.joke;
    })
    .catch(error => {
         console.log(error);
         document.getElementById("section2").style.color = 'red';
    });   
}    