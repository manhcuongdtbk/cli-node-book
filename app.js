const yargs = require("yargs")
const { addNote, removeNote } = require("./notes")


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
