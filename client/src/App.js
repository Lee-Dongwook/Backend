import React,{Suspense} from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route
} from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';

function App() {
  return (
   <Router>
   <Suspense fallback = {<div>Loading...</div>}>
   <Routes>
   <Route path = "/" element={<MainPage />} />
   </Routes>
   </Suspense>
   </Router>
  );
}

export default App;
