const express = require('express')

const admins = require('./routes/api/admins')
const consaltancyAgencies = require('./routes/api/consaltancyAgencies')
const application = require('./routes/api/application')
const notification = require('./routes/api/notification')
const partner = require('./routes/api/partner')

const app = express()
app.use(express.json())

// Direct routes to appropriate files 
/*
*/
app.use('/api/admins', admins)
app.use('/api/consaltancyAgencies', consaltancyAgencies)
app.use('/api/Notification', notification)
app.use('/api/Partner', partner)
app.use('/api/Application', application)


app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LirtenHub</h1>
    <a href="/api/admins">Admins</a>
    <a href="/api/consaltancyAgencies">Consaltancy Agencies</a>
    `);
})


//to be integrated----------------

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
