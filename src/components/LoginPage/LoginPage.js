import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        // إعداد الطلب
        const response = await fetch('/api/auth/login', {
            method: 'POST', // تحديد طريقة الطلب
            headers: {
                'Content-Type': 'application/json', // تحديد نوع المحتوى
                'Authorization': 'Bearer your_token_here', // إضافة التوكن إذا كان ذلك مطلوبًا
            },
            body: JSON.stringify({ username, password }), // إرسال بيانات تسجيل الدخول
        });

        // معالجة الاستجابة
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
