import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="center-nav">
          <ul className="nav-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
                end
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fullstackdevelopment"
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
              >
                Full Stack Development
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/datascience"
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
              >
                Data Science
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cybersecurity"
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
              >
                Cyber Security
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) => (isActive ? 'active-link' : undefined)}
              >
                Career
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstackdevelopment" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
