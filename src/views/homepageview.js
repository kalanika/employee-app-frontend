import React, { Fragment } from "react";
import Home from '../components/Home';
import {Provider} from 'react-redux';
import store from '../store';




const HomePageView = () => (
    <Provider store={store}>
    <Home/>
  </Provider>
);

export default HomePageView;