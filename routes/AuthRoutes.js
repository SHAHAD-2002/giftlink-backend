const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb'); // تأكد من استيراد MongoClient

// اتصال بقاعدة البيانات
const uri = 'YOUR_MONGODB_CONNECTION_STRING'; // استبدل بسلسلة اتصال MongoDB الخاصة بك
const client = new MongoClient(uri);

router.get('/current-user', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('YOUR_DATABASE_NAME'); // استبدل باسم قاعدة البيانات الخاصة بك
        const usersCollection = database.collection('users'); // استبدل باسم مجموعة المستخدمين

        // البحث عن المستخدم بناءً على ID أو معايير أخرى
        const userId = req.user.id; // افترض أنك تحصل على ID المستخدم من توكن المصادقة
        const user = await usersCollection.findOne({ _id: userId });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        await client.close();
    }
});

module.exports = router;
