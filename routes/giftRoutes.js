const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db'); // استيراد دالة الاتصال بقاعدة البيانات

// Route to get all gifts
router.get('/', async (req, res) => {
  const db = await connectToDatabase(); // الاتصال بقاعدة البيانات
  const gifts = await db.collection('gifts').find().toArray();
  res.json(gifts);
});

// Route to get a specific gift by id
router.get('/:id', async (req, res) => {
  const db = await connectToDatabase(); // الاتصال بقاعدة البيانات
  const gift = await db.collection('gifts').findOne({ _id: req.params.id });
  res.json(gift);
});

module.exports = router;
