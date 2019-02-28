



const express = require('express')
const requests = require('./routes/api/requests')
const tasks = require('./routes/api/tasks')
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
    <a href="/api/requests">Requests</a>
    <a href = "/api/tasks"> Tasks </a> 
    `);
})

// Direct routes to appropriate files 
app.use('/api/requests', requests)
app.use('/api/tasks',tasks)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 5999
app.listen(port, () => console.log(`Server up and running on port ${port}`))