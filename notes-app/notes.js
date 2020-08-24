const fs = require('fs');

const getNotes = function() {
  return fs.readFileSync('./sample.txt').toString();
}

const addNote = function(title, body) {
  const notes = readNotes();
  //console.log(notes);
  //console.log(title,body);
  notes.push({
    title: title,
    body: body
  });

  debugger;

  notesJSON = JSON.stringify(notes);
  fs.writeFileSync('./notes.json', notesJSON);
  console.log('Done');
}

const removeNote = (title) => {
  const notes = readNotes();
  const newNotes = [];
  notes.map((note) => {
    (note.title === title) ? null : newNotes.push(note);
  })
  notesJSON = JSON.stringify(newNotes);
  fs.writeFileSync('./notes.json', notesJSON);
  console.log('Done');
}

const readNotes = function() {
  try {
    const notes = fs.readFileSync('./notes.json').toString();
    return JSON.parse(notes);
  } catch(e) {
    return [];
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};