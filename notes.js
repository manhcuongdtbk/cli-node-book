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

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push({ title, body })
    saveNotes(notes)
    console.log("New note added!")
  } else {
    console.log("Note title taken!")
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse("Note removed!"))
  } else {
    console.log(chalk.red.inverse("No note found!"))
  }
}

module.exports = {
  listNotes,
  addNote,
  removeNote
}
