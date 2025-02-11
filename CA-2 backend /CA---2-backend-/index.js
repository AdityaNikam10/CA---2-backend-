const express = require('express');
const app = express();

const statusMessages = {}

const user = [
    Username:"adityanikam",
    email:"adi123@gmail.com",
    Password:"Adi12345",
    DOB: 14/04/2003
]

app.get('/username-info', (req, res) => {
    const code = parseInt(req.query.code);
    return res.json({code: 200, message:"Username cannot be empty"})
});


app.get('/email-info', (req, res) => {
    const code = parseInt(req.query.code);
    return res.json({code: 300, message:"Email cannot be empty"})
});

app.get('/password-info', (req, res) => {
    const code = parseInt(req.query.code);
    return res.json({code: 400, message:"Password length should be greather than 8 or less than or equal to 16"})
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});





































































