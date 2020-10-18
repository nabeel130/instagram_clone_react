import React , {useState , useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './Firebase';

function App() {

  const [posts , setPosts] = useState([]);

  //useEffect -> Runs a piece of code on a specific condition

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      //every time new post added, th is code works
      setPosts(snapshot.docs.map(doc => ({
        id : doc.id,
        post : doc.data()
      })));
    })
  }, []);

  return (
    <div className="App">

    {/* header part */}
    <div className="app__header">
      <img  className="app__headerImage" width="100px" src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
      alt="instalogo"
      />
    </div>
    <h1>Hello we can start building instagram clone usinig React app</h1>

    {
      posts.map(({id , post }) => {
        return(
          <Post key ={id} username = {post.username} caption = {post.caption} imageUrl = {post.imageUrl} />
        )
      })
    }
    
    </div>
  );
}

export default App;
