function onValueChange()
{
    let search = inputText.value;
    if (search) 
    {
        let config = {
            method: 'GET',
            url: 'https://api.github.com/search/repositories?q=' + search,
        };
        let request = obj =>  {
            console.log('asdasd');
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
                xhr.send();
            });
        };
        request(config)
            .then(data => {
                let response = JSON.parse(data); 
                let items = response.items;
                for(let i = 0; i<items.length; i++)
                {
                    document.getElementById("results").innerHTML += `<li><a href="https://github.com/${items[i].full_name}">${items[i].name}</a></li>`
                }        
            })
            .catch(error => {
                console.log(error);
            });   
    }
}
