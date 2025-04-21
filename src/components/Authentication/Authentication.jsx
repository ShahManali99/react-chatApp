import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase-config'
import Cookies from 'universal-cookie';
import './Authentication.css';

const cookies = new Cookies();

const Authentication = ({setAuth}) => {
  const handleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      cookies.set('auth-token', res.user.refreshToken)
      setAuth(true)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <div className="auth">
        <p>Sign In with Google to continue</p>
        <button onClick={handleSignIn}>Sign In with Google</button>
      </div>
    </>
  )
}

export default Authentication