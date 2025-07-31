import React, { useState } from 'react'

function Auth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        {isLoggedIn ? (
            <div>
                <p>Welcome back, User!</p>
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
        ): (
           <div>
                <p>Please login to continue</p>
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            </div> 
        )}
    </div>
  )
}

export default Auth 