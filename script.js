const input=document.getElementById("notesinput");
const adbtn=document.getElementById("addbtn");
const notelist=document.getElementById("notelist");

function addNote(){
  const noteText=input.value.trim();
  if (noteText!==""){
    const note=document.createElement("p");
    note.textContent=noteText;
    notelist.append(note);
    input.value="";
  }
}

adbtn.addEventListener("click",addNote);
