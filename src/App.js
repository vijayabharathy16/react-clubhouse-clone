import logo from './logo.svg';
import axios from 'axios';
import './Chat.css';
// import './App.css';
import Chat from './components/Chat';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import LeaveMetting from './components/LeaveMetting';
import Participants from './components/Participants';
import More from './components/More';
import Share from './components/Share';
import Leave from './components/Leave';
import StopShare from './components/StopShare';

function App() {
  const [users , setUsers] = useState([]);
  useEffect(async () => {
    let users = await axios.get("http://localhost:3001/users")
    console.log(users.data)
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/meeting" element={<LeaveMetting />} />
        <Route path="/part" element={<Participants />} />
        <Route path="/mem" element={<More />} />
        <Route path="/see" element={<Share/>} />
        <Route path="/reopen" element={<Leave/>} />
        <Route path="/stop" element={<StopShare/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
