const { connect } = require("mongoose")

const connectDb = async () => {
  return connect(
    "mongodb+srv://myproject:emmanuel@cluster0.zwvp3fv.mongodb.net/?retryWrites=true&w=majority",
    { dbName: "lms" }
  )
}

module.exports = { connectDb }
