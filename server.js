const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser=require('body-parser')
//socket-io
const socketio = require('socket.io');


require('dotenv').config()
/* project packages */

/* Connect DB */
require('./config/passport')(passport);
const db=require('./config/key').mongoURL;
mongoose.connect(db
,{ useNewUrlParser: true,useFindAndModify: false})
.then(()=>console.log('ket noi thanh cong'))
.catch(console.log)

/* initialize server */
const app = express();

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
/* middlewares */
// parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// passport
app.use(passport.initialize());
//socket
// socket.io
const server = app.listen(5000, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port);
  });
const io = socketio(server);
io.on('connection', (socket) => {
  console.log('Socket connected');
  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });
});
  
// router
app.use('/api/users', require('./routes/api/users'));
app.use('/api/driver', require('./routes/api/driver'));
app.use('/api/car', require('./routes/api/car'));
app.use('/api/carmanufature', require('./routes/api/carmanufacturer'))

