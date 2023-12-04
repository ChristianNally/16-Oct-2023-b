import {useState} from 'react';

const MatchMessages = (props) => {

	const [selectedCat, setSelectedCat] = useState(0);

	const handleChange = (event) => {

	};

	return (
		<>
		<h1> Match Messages </h1>

		<label for="matchedCats">Choose a caT:</label>

<select name="cars" id="matchedCats" onChange={handleChange}>
		{ props.matchList.map((item, index) => <option key={index} value={item}>{props.cats[item].name}</option> ) }
</select>

		</>

	);
};

export default MatchMessages;