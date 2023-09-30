import { Outlet } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';

function App() {
  return (
 <>
 <Navbar />
 <Outlet> </Outlet>
 <Footer />

 </>
  );
}

export default App;
