import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddUser from './component/AddUser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from './component/EditUser';
import ViewUser from './component/ViewUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/adduser" element={<AddUser />} />
            <Route exact path='/edituser/:id' element={<EditUser />} />
            <Route exact path='/viewuser/:id' element={<ViewUser />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
