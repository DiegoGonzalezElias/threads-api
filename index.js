import express from 'express';
import bodyParser from 'body-parser';
import threadsRouter from './api/routes/routes.js'


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/user', threadsRouter)
app.get('/api/threads', threadsRouter)
app.get('/api/replies', threadsRouter)
app.get('/api/thread-replies', threadsRouter)



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
