function saveTextLS(){
    let textLS = document.getElementById('textAreaLS').value;
    localStorage.setItem('newText', textLS);
    console.log(textLS);   
}

function clearTextLS(){
    let textLS = document.getElementById('textAreaLS').value;
    localStorage.removeItem('newText');
    document.getElementById('textAreaLS').value = '';
}

let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let db;
let newDB = indexedDB.open('textAreaDB', 1); 

newDB.onupgradeneeded = function(e){
    db = e.target.result;
    if (!db.objectStoreNames.contains('savedText')) 
    {
        db.createObjectStore('savedText', {autoIncrement: true});
    }
};

newDB.onerror = function(e){
    console.log('Something went wrong: '+e);
};
 
newDB.onsuccess = function(e){
    db = e.target.result;
    console.log('Yay! Success: '+ db);
};

function saveTextDB(){
    let transaction = db.transaction(['savedText'], 'readwrite');
    let store = transaction.objectStore('savedText');
    let content = document.getElementById('textAreaDB').value;
    let request = store.put(content);
    request.onerror = function (e){
        console.log('Unable to add text'+e.target.error.name);
    }
    request.onsuccess = function (e){
        console.log('Text added to database!');
    }
 }
 function clearTextDB(){
    let transaction= db.transaction(['savedText'], 'readwrite');
    let store = transaction.objectStore('savedText');
    store.clear();
    document.getElementById('textAreaDB').value = ''
    console.log('Text erased!');
 }

 if (window.File && window.FileReader && window.FileList && window.Blob) {
    console.log('yay!');
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }