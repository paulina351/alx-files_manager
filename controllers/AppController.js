const express = require('express')
const app = express()
const port = 3000

app.get('/status', (req, res) => {
  return({ "redis": true, "db": true }), 200
});

app.get('/stats', (req, res) => {
    return({ "users": 12, "files": 1231 }), 200
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})