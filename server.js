const cors = require('cors')

const express = require('express') /* chamando express*/
const app = express() /*iniciando express*/
const axios = require('axios')


app.use(cors())
/* servindo api*/
app.get('/', async(req, res) => {



    try {
        // response [e a resposta do axios mas eu tiro o data de dentro do response]
    const {data}  = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    return res.json (data)
    } catch (error) {
        console.error(error)
    }
    




    
}) /*criando rota*/

app.listen ('4567') /*ouvir a porta 4567*/