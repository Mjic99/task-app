const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const tagRouter = require('./routers/tag')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(tagRouter)

app.listen(port, () => {
    console.log("server on port " + port)
})