import React from 'react'
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
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default LogOut