const express = require('express');
const app     = express();
const port = process.env.PORT || 3000;


app.listen(port);
console.log(`Running at Port ${port}`);


app.get('../Clientvalidierung/index.html', (req, res) => {
    res.send("Contract for the dive course");
})