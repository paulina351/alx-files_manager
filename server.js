import  express from 'express';
import path from 'path';
const PORT = 5000;

const app = express()


app.get('/index.js', (req, res) => {
  res.send(path.join(__dirname, 'routes'));
})

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`)
})