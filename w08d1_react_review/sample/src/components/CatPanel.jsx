import React, { useState } from 'react';
import './CatPanel.css';

const CatPanel = (props) => {

	const [selectedCat, setSelectedCat] = useState(0);

	const handleLeft = () => {
		if (selectedCat < props.cats.length - 1) {
			setSelectedCat(selectedCat + 1);
		} else {
			setSelectedCat(0);
		}
	};

	const handleRight = () => {
		console.log('running handleRight');
		props.addToMatchList(selectedCat);
	};

	const matchStatus = (cat_id) => {
		if (props.matchList.includes(cat_id)) {
			return "Matched";
		} else {
			return "Not Matched";
		}
	};

	return (
		<div className="cat">
			<header>
				<h5>{props.cats[selectedCat].name}: {matchStatus(selectedCat)}</h5>
			</header>
			<article>
				<button onClick={handleLeft}>Left(Another)</button>
				<img width="200px" src={props.cats[selectedCat].img} />
				<button onClick={handleRight}>Right(Details)</button>
			</article>
		</div>
	);
};

export default CatPanel;