import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from "react-redux";



export const productReducer = (state = [], action) => { // name = [] name에 아무 값도 들어오지 않으면 빈 배열을 default 파라미터로 써라
  return state;
}