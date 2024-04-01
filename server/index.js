const express = require ('express');
const {mongoose} = require ('mongoose');
const dotenv = require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log(err))

//Middleware
app.use(express.json());

//Port Declaration
const PORT = 5001;

app.use('/', require('./routes/authRoutes'));


app.listen(PORT, () => console.log('Server is Running'));


