import express from 'express';
import Vendor from '../models/Vendor.js';

const router = express.Router();

// GET vendors with pagination
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;
  try {
    const vendors = await Vendor.find().skip(skip).limit(limit);
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vendors' });
  }
});

// GET single vendor
router.get('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    res.json(vendor);
  } catch (err) {
    res.status(404).json({ error: 'Vendor not found' });
  }
});

// POST new vendor
router.post('/', async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.status(201).json(vendor);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// PUT update vendor
router.put('/:id', async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
     const { _id, __v, createdAt, updatedAt, ...cleanedVendor } = updatedVendor.toObject();

    res.json(cleanedVendor);
  } catch (err) {
    console.error('Update Error:', err);
    res.status(400).json({ error: 'Update failed' });
  }
});
// DELETE vendor
router.delete('/:id', async (req, res) => {
  try {
    await Vendor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Vendor deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Delete failed' });
  }
});

export default router;
