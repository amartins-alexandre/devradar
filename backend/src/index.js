const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket.js')

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://omnistack:omnistack@semanaomnistack10-itzyu.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

setupWebsocket(server);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
