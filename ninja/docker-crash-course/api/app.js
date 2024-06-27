const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Tagore Your are Very Good Trying With NG"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond Some Name"
    },
    {
      "id":"3",
      "title":"Shows Review: Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000...')
})