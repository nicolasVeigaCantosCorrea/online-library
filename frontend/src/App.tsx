import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
