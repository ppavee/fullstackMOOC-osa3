const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://ppavee:${password}@cluster0-svrtq.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})
const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(p => {
            console.log(`${p.name} ${p.number}`)
        })
        mongoose.connection.close()
    })
} else {

    const newName = process.argv[3]
    const newNumber = process.argv[4]

    if (newName && newNumber) {
        const person = new Person({
            name: newName,
            number: newNumber
        })

        person.save().then(response => {
            console.log(`added ${response.name} number ${response.number} to phonebook`)
            mongoose.connection.close()
        })
    } else {
        console.log('provide a name and a number for a new contact')
        mongoose.connection.close()
    }
}
