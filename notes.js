console.log("Starting note.js");

var fs = require("fs");

var fetchNote =() =>{
    try{
        notesString = fs.readFileSync("notes-state.json");
    notes = JSON.parse(notesString);
    return notes;
    }
catch(e){
   console.log ("cvxvc")
    return [];
}
}

var saveNote = (notes) =>{
    fs.writeFileSync("notes-state.json", JSON.stringify(notes)); 
    console.log("Note is uploaded");
}





var addNotes = (title, body) =>{
    var notes =[];
    var note ={
        title,
        body
    };

 
    var duplicateNotes = notes.filter((note) => note.title === title)
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNote(notes)
    }
    
    else{
        console.log("This note is already there")
    }
}

var getList = () =>{
    console.log("Getting List");
}
var getNote = () =>{
    console.log("Getting Note");
}

var removeNote = () =>{
    console.log("Removing Note");
}
module.exports={
    addNotes,
    getList,
    getNote,
    removeNote
}

