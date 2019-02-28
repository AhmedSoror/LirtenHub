const express = require('express')

const application = require('./routes/api/application')
const notification = require('./routes/api/notification')
const partner = require('./routes/api/partner')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h2>Welcome</h2> `);
})

// Direct routes to appropriate files 
/*
*/
app.use('/api/Notification', notification)
app.use('/api/Partner', partner)
app.use('/api/Application', application)

//to be integrated----------------

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
