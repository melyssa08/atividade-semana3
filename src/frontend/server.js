const express = require('express')
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}))

app.use(express.static(__dirname));

const server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
});