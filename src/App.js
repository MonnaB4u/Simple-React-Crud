import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import { UserProvider } from './Components/UserContext/UserContext';
import Delete from './Components/Delete/Delete';
import Read from './Components/Read/Read';
import CreatID from './Components/CreatID/CreatID';
import Edit from './Components/Edit/Edit';


function App() {
  return (
    <div >
      <p  className="h1 text-center mt-4 text-success border-bottom border-success">Simple React Crud</p>
    <UserProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/delete:Id' element={<Delete />} />
          <Route path='/read:Readid' element={<Read />} />
          <Route path='/CreateId' element={<CreatID></CreatID>} />
          <Route path='/edit:editID' element={<Edit/>}> </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </div>

  );
}

export default App;
