import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">

    {/* header part */}
    <div className="app__header">
      <img  className="app__headerImage" width="100px" src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
      alt="instalogo"
      />
    </div>
    <h1>Hello we can start building instagram clone usinig React app</h1>
    <Post username ="nabeel_kmvkd" caption = "how nice things in2020" imageUrl = "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
    <Post username ="u_akshay" caption = "its cousin days" imageUrl ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png"/>
    <Post username ="jithin_km" caption = "all ofr goood" imageUrl ="https://www.surrealcms.com/uploads/nodejs-logo.png" />
    <Post />

    {/* post list
    post list */}
    </div>
  );
}

export default App;
