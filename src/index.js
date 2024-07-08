import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StudentsStore from './Stores/StudentsStore';
import IndustryStore from './Stores/IndustryStore';
import IndustryPartnersStore from './Stores/IndustryPartnersStore';
import FacultyStores from './Stores/FacultyStores';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StudentsStore>
      <IndustryStore>
        <FacultyStores>
          <IndustryPartnersStore>

         
    <App />
    </IndustryPartnersStore>
    </FacultyStores>
  
    </IndustryStore>
    </StudentsStore>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
