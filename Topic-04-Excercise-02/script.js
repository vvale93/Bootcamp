if (window.File && window.FileReader && window.FileList && window.Blob){
    console.log('Great success! All the File APIs are supported.');
} 
else{
    alert('The File APIs are not fully supported in this browser.');
}

function handleFileSelect(e){
    e.stopPropagation();
    e.preventDefault();
    let files = e.dataTransfer.files;
    let output = [];
    for (let i=0,f; f = files[i]; i++){
        if (f.type != 'text/plain'){
            alert('Only text files allowed');
        } 
        else{
            output.push(f.name);
            document.getElementById('fileDragOutput').innerHTML  += `<li>${output[i]}</li>`;
        }
    }
}
function handleDragOver(e){
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; 
}
  let dropZone = document.getElementById('fileDrag');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
