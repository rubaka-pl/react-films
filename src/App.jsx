import { useEffect } from 'react';
import M from 'materialize-css';

import './App.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
