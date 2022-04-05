import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Editor from './components/Editor';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast'

import './App.css'

function App() {
  return (
    <div className="gradient-bg-welcome">

      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            className: 'toast-hite-glassmorphism',
            duration: 4000,
            success: {
              theme: {
                primary: '#4aed88',
              }
            }
          }}
        >
        </Toaster>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<Editor />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
