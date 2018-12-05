const express = require('express')
const os = require('os');
const app = express();

require('dotenv').config({ path: '.env' })

const port = process.env.SERVER_PORT;

const hostname = os.hostname();

app.get('/', (req, res) => {
  res.send(`Saludos desde ${hostname}!`);
});

app.listen(port, () => 
  console.log(`Server listening on port ${port}!`)
)
