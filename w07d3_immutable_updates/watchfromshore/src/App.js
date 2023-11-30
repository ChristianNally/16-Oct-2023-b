import logo from './logo.svg';
import { useState } from 'react';
import Header from './components/Header.jsx';
import ReplyList from './components/ReplyList.jsx';
import Footer from './components/Footer.jsx';
import Sighting from './components/Sighting.jsx';
import './App.css';

const users = [
  {
    username: 'LikeSo',
    uid: 0,
    profilePic: 'user0.png'
  },
  {
    username: 'LikeSome',
    uid: 1,
    profilePic: 'user1.png'
  },
  {
    username: 'LikeMore',
    uid: 2,
    profilePic: 'user2.png'
  },
];

const stateDefault = {
  image: 'stringpath.png',
  user_id: 0,
  bodyText: 'it was amazing. there are 6 of them!',
  likeCount: 0,
  replies: [
      {
        id: 0,
        user: 1,
        bodyText: 'yes, I see 6',
        likeCount: 0
      },
      {
        id: 1,
        user: 1,
        bodyText: 'i only, I see 5',
        likeCount: 3
      }
  ]
}

function App() {

  const [sighting, setSighting] = useState(stateDefault);

  const incrementReplyCount = (replyId) => {
    const reply_index = sighting.replies.findIndex(reply => reply.id === replyId);
    
    setSighting((prev) => {
      const newReplies = [...prev.replies]; // build up a deep copy
      const updatedSighting = {...prev, replies: newReplies};
      updatedSighting.replies[reply_index].likeCount++; // actually update it
      return updatedSighting;
    });
  };
  
  return (
    <>
      <Header />
      <main>
        <Sighting users={users} sighting={sighting}/>
      </main>
      <ReplyList replies={sighting.replies} incrementReplyCount={incrementReplyCount}/>
      <Footer />
    </>
  );
}

export default App;
