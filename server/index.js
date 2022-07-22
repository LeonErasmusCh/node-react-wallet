const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const transactions = require('./routes/transactions')


const PORT = process.env.PORT || 3001
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(bodyParser.urlencoded({ extended: true })) //parse body from form
app.use('/api', transactions)


router.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT , () => {
    console.log(`Server listening on port: ${PORT}`)
});