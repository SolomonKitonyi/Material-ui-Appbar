import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './Appbar';

const App = ()=>{
    return (
        <BrowserRouter>
          <AppBar />
        </BrowserRouter>
        
    );
};

export default App;