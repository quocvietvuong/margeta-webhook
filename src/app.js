const express = require('express')
const app = express()
const port = 3001

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

app.post('/webhook', (req, res) => {
    console.log(req);
    return res.send("OK done")
});

app.get('/', (req, res) => {
	res.send('Hello World!')
})