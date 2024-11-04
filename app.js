const express = require('express');
const bodyParser = require('body-parser');
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/gifts', giftRoutes); // إضافة مسار الهدايا
app.use('/api/gifts/search', searchRoutes); // إضافة مسار البحث

// بدء الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
