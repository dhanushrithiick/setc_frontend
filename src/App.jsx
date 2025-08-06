import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import './App.css';
import Meettheteam from './pages/meettheteam.jsx';
import Contact from './pages/contact.jsx';
import ScrollToTop from './components/scrolltotop.jsx';
import Pathways from './pages/pathways.jsx';
import Admin from './pages/Admin.jsx';
import Adminlogin from './pages/Adminlogin.jsx';
import ExcomPanel from './pages/ExcomPanel.jsx';
import AchievementsPanel from './pages/AchievementsPanel.jsx';
import MessagesPanel from './pages/MessagesPanel.jsx';
import TestimonialsPanel from './pages/TestimonialsPanel.jsx';
import EditAchievement from './pages/editAchievement.jsx';
import AddAchievement from './pages/addAchievement.jsx';
import Upadateexcom from './pages/updateexcom.jsx';
import AddTestimonial from './pages/AddTestimonial.jsx';
import UpdateTermPeriod from './pages/UpdateTermPeriod.jsx';

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pathways' element={<Pathways />} />
        <Route path='/meettheteam' element={<Meettheteam />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/manage-site' element={<Admin />} />
        <Route path='/adminlogin' element={<Adminlogin />} />
        <Route path='/excompanel' element={<ExcomPanel/>} />
        <Route path='/messagespanel' element={<MessagesPanel/>} />
        <Route path='/testimonialpanel' element={<TestimonialsPanel />} />
        <Route path='/achievementpanel' element={<AchievementsPanel />} />
        <Route path='/editachievement' element={<EditAchievement />} />
        <Route path='/addachievement' element={<AddAchievement/>} />
        <Route path='/updateexcom' element={<Upadateexcom/>} />
        <Route path='/addtestimonial' element={<AddTestimonial/>} />
         <Route path='/updatetermperiod' element={<UpdateTermPeriod/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
