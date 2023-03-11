import express from 'express';

const PORT = 5000;
const HOST = 'http://localhost';
const app = express();

app.get('/', (req, res) => {
    res.send("Hello to the server side!");
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});