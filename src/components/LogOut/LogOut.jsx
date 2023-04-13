import React from 'react'
import ChatRoom from './ChatRoom'

import { UserAuth } from '../../context/AuthContext'


function LogOut() {
    const {logOut} = UserAuth();

    const handleLogOut = async() => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <ChatRoom />

            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default LogOut