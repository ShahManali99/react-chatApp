import { useRef, useState } from 'react'
import './App.css'
import Authentication from './components/Authentication/Authentication'
import Cookies from 'universal-cookie'
import Chat from './components/Chat/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState('')
  const inputRef = useRef()

  const handleSignOut = async () => {
    await signOut(auth)
    cookies.remove('auth-token')
    setIsAuth(false)
    setRoom('')
  }
  return (
    <>
      {!isAuth && <Authentication setAuth={setIsAuth}/>}
      {isAuth && (
        <>
          {room ? (
            <Chat room={room}/>
          ) : (
            <div className="room">
              <label>Enter Room Name : </label>
              <input ref={inputRef}/>
              <button onClick={()=>setRoom(inputRef.current.value)}> Enter Chat </button>
            </div>
          )} 
          <div className="sign-out">
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </>
      )}
    </>
  )
}

export default App
