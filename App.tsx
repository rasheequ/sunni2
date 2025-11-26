import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme';
import { DataProvider } from './context/ConfigContext';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Finder from './pages/Finder';
import Details from './pages/Details';
import Submit from './pages/Submit';
import Admin from './pages/Admin';
import UserDashboard from './pages/UserDashboard';
import { Login, Register } from './pages/Auth';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <ThemeProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/finder" element={<Finder />} />
                <Route path="/place/:id" element={<Details />} />
                <Route path="/submit" element={<Submit />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;