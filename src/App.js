import './App.css';
import Main from './Pages/Main';
import Mint from './Pages/Mint';
import Admin from './Pages/Admin';
import WhiteList from './Pages/WhiteList';
import WhitePaper from './Pages/WhitePaper';
import Loader from './Pages/Loader';
//ReactRouter
import { BrowserRouter as Router, Routes ,Route ,useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//AnimationOnScroll
import AOS from 'aos'


AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});
function App() {
  const location = useLocation();
  return (
          <div  className="App">
           <AnimatePresence exitBeforeEnter>
           <Routes location={location} key={location.pathname}>
             <Route path='/' exact element={<Main/>}/>
             <Route path='/Mint' element={<Mint/>}/>
             <Route path='/WhiteList' element={<WhiteList/>}/>
             <Route path='/Admin' element={<Admin/>}/>
             <Route path='/WhitePaper' element={<WhitePaper/>}/>
           </Routes>
           </AnimatePresence>
          </div>
  );
}

export default App;
