const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { APPCENTER } = require("ci-info")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const cors = require('cors')

const PORT = process.env.PORT || 5000

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err))

app.use(cors()) // CORS policy
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)

app.listen(PORT || 5000, () => {
  console.log(`Backend Server Running on port: http://localhost:${PORT}`)
})
