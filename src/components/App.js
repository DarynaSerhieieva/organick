import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store'; 
import { Home, AboutUs, Shop, Pagest, ContactUs, Error } from './content';
import Layout from './layout/Layout';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path="shop" element={<Shop />} />
            <Route path="pagest" element={<Pagest />} />
            {/* <Route path="portfolio/:portfolioId" element={<PortfolioId />} /> */}
            <Route path="contact_us" element={<ContactUs />} />
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
