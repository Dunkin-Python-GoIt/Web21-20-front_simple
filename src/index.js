import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from "./components/Header";
import Books from "./components/Books";
import AddBook from "./components/AddBook";


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
<React.StrictMode>
    <Header />
    <AddBook />
    <Books/>
  </React.StrictMode>
);