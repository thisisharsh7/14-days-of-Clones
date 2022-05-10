let notesElem;
showNotes();
let panel=document.getElementById('panel');
let btn=document.getElementById('submit');
let other=document.getElementById('clear');
btn.addEventListener("click",function(e){
    let textadd=document.getElementById('inputtext');
    let notes=localStorage.getItem('notes');
    if(textadd.value==""){
        alert('Input is blank!!!');
    }else{
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(textadd.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    textadd.value="";
    showNotes();
}
});

function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element, index){
        html+=`
                <div id="body">${element + " "}<button id="${index}" onclick="deleteNote(this.id)">delete</button></div>
                <br>`
    });
    notesElem=document.getElementById("notes");
    if(notesObj.length!=0){
        notesElem.innerHTML=html;
    }else{
        notesElem.innerHTML=`Nothing to show add above to see notes..`;
    }
}
function deleteNote(index) {
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }
other.addEventListener("click",function(e){
    html="";
    notesElem.innerHTML= notesElem.innerHTML=`Nothing to show add above to see notes..`;
    localStorage.clear();
})



