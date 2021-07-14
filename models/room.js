import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter room name'],
    trim: true,
    maxlength: [100, 'Room name cannot exceed 100 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter room price'],
    maxlength: [4, 'Room price cannot exceed 4 characters'],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, 'Please enter room description'],
  },
  address: {
    type: String,
    required: [true, 'Please enter room address'],
  },
  guestCapacity: {
    type: Number,
    required: [true, 'Please enter room guest capacity'],
  },
  numOfBeds: {
    type: Number,
    required: [true, 'Please enter number of beds in room'],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioning: {
    type: Boolean,
    default: false,
  },
  petAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, 'Please enter room category'],
    enum: {
      values: ['Single', 'Double', 'Family', 'Twin', 'Suite', 'Other'],
      message: 'Please select category for room',
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      ratings: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model.Room || mongoose.model('Room', roomSchema);