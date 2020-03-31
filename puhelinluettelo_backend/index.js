const express = require('express')
const app = express()

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const peopleCount = persons.length
    const requestTime = new Date()
    response.send(`<p>Phonebook has info for ${peopleCount} people</p>
                   <p>${requestTime.toString()}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})