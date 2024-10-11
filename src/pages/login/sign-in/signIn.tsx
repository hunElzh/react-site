import React, { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async(e:any) => {
        // 取消事件默认行为，防止表单提交时页面刷新或跳转
        e.preventDefault();
        const submitData = {
            email: email,
            password: password
        }
        debugger

    }

    return (
        <>
            
        </>
    )
}
