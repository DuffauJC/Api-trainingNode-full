const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express()
const port = process.env.PORT || 8000

app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`API TRAINING on port ${port}`)
})