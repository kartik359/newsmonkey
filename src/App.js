import './App.css';
import React from 'react';
import Nav from './component/Nav';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=>{
  let apiKey2="80bd42c1ee3d4dc2b721e880b2b06727";
  
    return (
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/about" key="About" element={<div style={{ padding: '2rem' }}>About NewsMonkey</div>} />
            <Route path="/sports" element={<News apiKey={ apiKey2}key="sports" pageSize={10} category="sports" />} />
            <Route path="/business" element={<News apiKey={ apiKey2}key="business" pageSize={10} category="business" />} />
            <Route path="/entertainment" element={<News apiKey={ apiKey2} key="entertainment" pageSize={10} category="entertainment" />} />
            <Route path="/health" element={<News apiKey={ apiKey2}key="health" pageSize={10} category="health" />} />
            <Route path="/science" element={<News apiKey={ apiKey2}key="science" pageSize={10} category="science" />} />
            <Route path="/technology" element={<News apiKey={ apiKey2}key="technology" pageSize={10} category="technology" />} />
            <Route path="/general" element={<News apiKey={ apiKey2} key="general" pageSize={10} category="general" />} />
          </Routes>
        </Router>
      </div>
    );
}
export default App