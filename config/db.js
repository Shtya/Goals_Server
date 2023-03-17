const mongoose = require("mongoose")

const connectiondb = () => {
mongoose.connect(`mongodb://127.0.0.1:27017/Goals`)
  .then(res => console.log(`connect in ${res.connection.host}`.cyan.underline)).catch(err => console.log(err))
}

module.exports = connectiondb