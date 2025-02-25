// Node.js backend using Express.js for Vendor App
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to Database'))
  .catch(err => console.error('Database connection error:', err));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('Connected to Database'));

// Vendor Schema
const VendorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  storeName: String,
  panCard: String,
  employerId: String,
  gstin: String,
  approved: { type: Boolean, default: false },
});
const Vendor = mongoose.model('Vendor', VendorSchema);

// Register Vendor
app.post('/register', async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json({ message: 'Vendor registered successfully', vendor });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Vendor Details
app.get('/vendor/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
