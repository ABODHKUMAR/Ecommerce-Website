const mongoose = require('mongoose');

const connectDatabase = () => {
 mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(err); 
      throw err; 
    });
};

module.exports = connectDatabase;
