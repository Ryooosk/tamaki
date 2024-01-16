import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import tamaki from "./images/tamaki.jpg"

const root = ReactDOM.createRoot(document.getElementById('root'));

const wrapper = {
  width: "800px",
  display: "flex",
  border: "3px dashed black",
  padding: "20px",
  margin: "20px auto",
  background: "#FFCCCC",
}

const intro = {
  width: "400px",
}

root.render(
  <div style={wrapper}>
    <div style={intro} >
      <h1>玉置優里</h1>
      <h2>生年月日</h2>
      <h3>2001年1月19日</h3>
      <h2>出身地</h2>
      <h3>大阪府東大阪市稲田本町</h3>
      <h2>出身高校</h2>
      <h3>大阪府立市岡高等学校</h3>
      <h2>趣味</h2>
      <h3>ネコと戯れること</h3>
    </div>
    <div>
      <img src="./images/tamaki.jpg" alt="tamaki" width="250" />
    </div>
  </div>
);

reportWebVitals();
