import logo from './logo.svg';
import './App.css';
import NaveBar from './app/Navbar/Navbar';
import Footer from './app/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Layout from './app/Layout/Layout';
import BrowseQuestions from './app/Browse-Questions/BrowseQuestions';

function App() {
  return (
    <div className="App">
      <NaveBar />
      <div className='App-layout'>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="/questions" element={<BrowseQuestions />} />
              {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
