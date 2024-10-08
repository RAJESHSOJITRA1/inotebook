const connectToMongo=require('./db')
connectToMongo(); 
const cors = require('cors')
const express = require('express')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'))
// Available Routes

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`iNotebook backend on port http://localhost:${port}`)
})