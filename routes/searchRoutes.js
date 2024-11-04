const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../models/db'); // استيراد دالة الاتصال بقاعدة البيانات

// Route to filter gifts by category
router.get('/filter/:category', async (req, res) => {
  const category = req.params.category; // الحصول على الفئة من المعلمات
  const db = await connectToDatabase(); // الاتصال بقاعدة البيانات
  const gifts = await db.collection('gifts').find({ category: category }).toArray(); // تصفية الهدايا حسب الفئة
  res.json(gifts);
});

module.exports = router;
