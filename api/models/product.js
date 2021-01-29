import mongoose from 'mongoose'


const reviewSchema = mongoose.Schema({
	name: {type: String, requires: true},
	rating: {type: Number, requires: true},
	comment: {type: String, requires: true},
}, {
	timestamps:true
})


const productSchema = new mongoose.Schema({
  user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
    },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required :true
  },
  category: {
    type: String,
    required: true
  },
  desciption: {
    type: String,
    required: true
	},
	reviews: [reviewSchema],
  rating: {
    type: Number,
		required: true,
		default: 0
  },
  numReviews: {
		type: Number,
    required: true,
		default: 0
  },
  price: {
		type: Number,
    required: true,
		default: 0
  },
  countInStock: {
		type: Number,
    required: true,
		default: 0
  }
}, {
  timestamps: true
});


const Product = mongoose.model('Product', productSchema)
export default Product
