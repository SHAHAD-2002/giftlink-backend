import React, { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        
        // إعداد الطلب
        const response = await fetch('/api/auth/register', {
            method: 'POST', // تحديد طريقة الطلب
            headers: {
                'Content-Type': 'application/json', // تحديد نوع المحتوى
                'Authorization': 'Bearer token', // يمكن أن تضيف هنا رمز التوكن إذا لزم الأمر
            },
            body: JSON.stringify({ username, password }), // إرسال البيانات
        });

        // معالجة الاستجابة
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;
