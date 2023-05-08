const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const listContacts = await contacts.listContacts();
            return console.table(listContacts);
        case "get":
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
        case "add":
            const addContact = await contacts.addContact(name, email, phone);
            return console.log(addContact);
        case "remove":
            const removeContact = await contacts.removeContact(id);
            return console.log(removeContact);
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
