const fs = require("fs")
const chalk = require("chalk")

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (error) {
    return []
  }
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse("Your notes"))
  notes.forEach(note => {
    console.log(note.title)
  })
}

const readNote = () => {
  const notes = loadNotes()
  const note = notes.find(note => note.title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === title)

  if (duplicateNote) {
    console.log("Note title taken!")
  } else {
    notes.push({ title, body })
    saveNotes(notes)
    console.log("New note added!")
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter(note => note.title !== title)

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse("Note removed!"))
  } else {
    console.log(chalk.red.inverse("No note found!"))
  }
}

module.exports = {
  listNotes,
  readNote,
  addNote,
  removeNote
}
