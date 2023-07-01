import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../UserContext.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post('/login', { email, password });
      if (data !== 'not found' && data !== 'pass not ok') {
        setUser(data);
        setRedirect(true);
        toast("Oh yeah! You're logged in!");
      } else {
        toast("Invalid email or password 😅");
      }
    } catch (e) {
      toast("Login failed");
    }
  }
  
  async function handleDemoLogin(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post('/api/demo');
      if (data !== 'not found' && data !== 'pass not ok') {
        setUser(data);
        setRedirect(true);
        toast("Oh yeah! You're logged in!");
      } else {
        toast("Demo login failed");
      }
    } catch (e) {
      toast("Demo login failed");
    }
  }
  

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Login</button>
          <button className="secondary" onClick={handleDemoLogin}>
            Demo Login
          </button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}