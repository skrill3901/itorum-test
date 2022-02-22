import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';
import { MainPage, UserPage } from './components/pages/';
import AppHeader from './components/appHeader/AppHeader';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/users/:login" element={<UserPage/>}/>
          </Routes>
        </main>
    </div>
    </Router> 
  );
}

export default App;
