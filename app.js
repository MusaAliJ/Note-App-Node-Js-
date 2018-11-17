var yargs = require("yargs");
var note = require("./notes");
console.log("Starting App");

var argv = yargs.argv;
var command = process.argv[2];
//console.log(`Command: ${command}`);
console.log("Process", process.argv);   
console.log("Yargs", argv);




if (command === "add"){
    note.addNotes(argv.title, argv.body)
}
else if(command === "list"){
    note.getList();
}
else if(command === "read"){
    note.getNote();
}
else if(command === "remove"){
    var removestat = note.removeNote(argv.title);
    var message = removestat ? "Note is Removed" : "Note is not removed"
    console.log(message);
}
else{
    console.log("Sorry, Command is not reconized");
}