const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('cos tam'))
app.get('/id/:x', (req, res) => {
    res.send('costam')
    console.log(req.params)
})

app.listen(port, () => console.log(`server is running on port ${port}`))
