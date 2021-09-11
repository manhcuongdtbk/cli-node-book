const yargs = require("yargs")
const { listNotes, readNote, addNote, removeNote } = require("./notes")

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    listNotes()
  }
})

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    readNote(argv.title)
  }
})

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    removeNote(argv.title)
  }
})

yargs.parse()
