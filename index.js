const app = require('./app')

const port = 3001 || 8000;

app.listen(port, ()=>{
    console.log(`app is listening on the port : ${port}`)
})