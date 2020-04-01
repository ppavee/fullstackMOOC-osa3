require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', (request, response) => {
    if(request.method !== 'POST') {
        return null
    }
    return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

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
    Person.find({}).then(result => {
        response.json(result.map(p => p.toJSON()))
    })
})

app.get('/info', (request, response) => {
    const peopleCount = persons.length
    const requestTime = new Date()
    response.send(`<p>Phonebook has info for ${peopleCount} people</p>
                   <p>${requestTime.toString()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person.toJSON())
    })
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    if(!(body.name && body.number)) {
        return response.status(400).json({
            error: 'name and number needed'
        })
    } else if(persons.map(p => p.name.toLowerCase()).includes(body.name.toLowerCase())) {
        return response.status(403).json({
            error: 'name must be unique'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    })  
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})