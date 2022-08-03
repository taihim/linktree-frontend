import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from  "./routes/profile"
import DraggableList from './routes/draggablelist'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/dnd" element={<DraggableList />} />
//     </Routes>
//   </BrowserRouter>
// );

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dnd" element={<DraggableList />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
