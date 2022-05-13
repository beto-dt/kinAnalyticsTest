const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config()
const port = process.env.PORT;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOOSE_CONNECT)
        .then(() => {
            console.log('successful connection!')
            app.listen(port,() => {
                console.log('server running on http://localhost:'+ port)
            })
        })
        .catch(err => console.log(err))