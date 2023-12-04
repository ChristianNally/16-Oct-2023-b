import React, { useState } from 'react';
import CatPanel from './components/CatPanel';
import MatchMessages from './components/MatchMessages';
import './App.css';

function App() {

	const [showCats, setShowCats] = useState(true);
	const [matchList, setMatchList] = useState([]);

	const cats = [
		{
			name: 'Franklin',
			breed: 'British Shorthair',
			age: 4,
			color: 'black',
			relationshipStatus: 'single',
			sanityLevel: 5,
			img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			name: 'Jenny',
			breed: 'Persian',
			age: 2,
			color: 'white',
			relationshipStatus: 'single',
			sanityLevel: 3,
			img: 'https://cdn.theatlantic.com/thumbor/B7U27JF25tScMZkCe5Pl9EqXjao=/0x131:2555x1568/960x540/media/img/mt/2017/06/shutterstock_319985324/original.jpg'
		},
		{
			name: 'Penny',
			breed: 'British Shorthair',
			age: 3,
			color: 'black',
			relationshipStatus: 'single',
			sanityLevel: 2,
			img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];

	const messages = [
		{sender: 0, receiver: 1, text: 'hey there! how IS it?'},
		{sender: 0, receiver: 1, text: 'hey there! how IS it?'},
		{sender: 0, receiver: 2, text: 'hey there! how IS it?'},
	];

	const handleShowCats = () => {
		setShowCats(!showCats);
	};

	const addToMatchList = (cat_id) => {
		setMatchList([...matchList, cat_id]);
	};

  return (
    <div className="App">

		<h1>Cat Dating</h1>
		<label htmlFor="showCats">Show Cats</label>
		<input type="checkbox" id="showCats" checked={showCats} onChange={(event) => {handleShowCats()}} />
		{ showCats && <CatPanel cats={cats} matchList={matchList} addToMatchList={addToMatchList}/> }
		{ !showCats  && <MatchMessages cats={cats} matchList={matchList} /> }
    </div>
  );
}

export default App;
