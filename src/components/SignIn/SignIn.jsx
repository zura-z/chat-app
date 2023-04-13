import React from 'react'
import { UserAuth } from '../../context/AuthContext'

function SignIn() {
    const { googleSignIn } = UserAuth();

    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    )
}

export default SignIn