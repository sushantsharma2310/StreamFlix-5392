import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Kids from './pages/Kids';
import MyList from './pages/MyList';
import Search from './pages/Search';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Corporate from './pages/Corporate';
import Legal from './pages/Legal';
import Help from './pages/Help';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfileSelect from './pages/ProfileSelect';
import ProfileSettings from './pages/ProfileSettings';
import AccountSettings from './pages/AccountSettings';
import ContentDetail from './pages/ContentDetail';

import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { WatchlistProvider } from './context/WatchlistContext';

import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <WatchlistProvider>
          <div className="flex flex-col min-h-screen bg-dark">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/shows" element={<TVShows />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/my-list" element={<MyList />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile/select" element={<ProfileSelect />} />
                <Route path="/profile/:id" element={<ProfileSettings />} />
                <Route path="/account/settings" element={<AccountSettings />} />
                <Route path="/movies/:id" element={<ContentDetail type="movies" />} />
                <Route path="/shows/:id" element={<ContentDetail type="shows" />} />

                {/* Legal Pages */}
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/corporate" element={<Corporate />} />
                <Route path="/legal" element={<Legal />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </WatchlistProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;