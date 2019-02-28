const express = require('express')

const event = require('./routes/api/event')
const eventRequest = require('./routes/api/eventRequest')
const eventBooking = require('./routes/api/eventBooking')
const members = require('./routes/api/members')
const reviews = require('./routes/api/reviews')
const admins = require('./routes/api/admins')
const consaltancyAgencies = require('./routes/api/consaltancyAgencies')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LertinHub </h1>
    <a href="/api/event">Event</a>
    <a href="/api/eventRequest">Event Request</a>
    <a href="/api/eventBooking">Event Booking</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/event', event)
app.use('/api/eventRequest', eventRequest)
app.use('/api/eventBooking', eventBooking)
app.use('/api/members', members)
app.use('/api/reviews', reviews)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))


