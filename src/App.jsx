import { useRef, useState } from 'react'
import './App.css'
import Authentication from './components/Authentication/Authentication'
import Cookies from 'universal-cookie'
import Chat from './components/Chat/Chat';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))
  const [room, setRoom] = useState('')
  const inputRef = useRef()
  return (
    <>
      {!isAuth && <Authentication setAuth={setIsAuth}/>}
      <div>
        {isAuth && 
        (room ? <Chat room={room}/> : 
        <div className="room">
          <label>Enter Room Name : </label>
          <input ref={inputRef}/>
          <button onClick={()=>setRoom(inputRef.current.value)}> Enter Chat </button>
        </div>) }
      </div>
    </>
  )
}

export default App
