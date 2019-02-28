const express = require('express')

const admins = require('./routes/api/admins')
const consaltancyAgencies = require('./routes/api/consaltancyAgencies')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to LirtenHub</h1>
    <a href="/api/admins">Admins</a>
    <a href="/api/consaltancyAgencies">Consaltancy Agencies</a>
    `);
})

app.use('/api/admins', admins)
app.use('/api/consaltancyAgencies', consaltancyAgencies)

app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))