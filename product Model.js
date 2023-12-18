const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
      {
        patientName:{
          type: String,
          required: [true, "Please enter a valid name"]
        },
        patientId:{
          type:Number,
          required:true,
          default: 0
        },
        date:{
          type:date,
          required:true,
        },
        image: {
          type:String,
          required:false,
        }
      },
      {
        timestamps:true
      }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;