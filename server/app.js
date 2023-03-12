const express = require("express");
const { use } = require("./routes/userRoutes");
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json())

// Routes
app.use('/api/v1/user', userRouter)

app.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
})

app.listen(8000, () => {
    console.log(`Server is listening on port 8000...`)
})