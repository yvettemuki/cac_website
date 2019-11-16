import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';  //这里是组件 可以作为html里面的自定义标签使用
import About from './pages/Home';
import './stylesheet/index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
