import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './UserList.css'

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                console.log(data);
                
                setUsers(data);
                setLoading(false);

            } catch (error) {
                console.log("Lỗi", error);
                setLoading(false);
            }
        }
        fetchUser();
    }, [])

    if(loading) {
        return <p className="loading">Đang tải dữ liệu ...</p>
    }

    return (
        <div className="user-container">
            <h2>User list</h2>
            {users.map((user) => (
                <li key={user.id} className="user-item">
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </li>
            ))

            }
        </div>
    )
}

export default UserList