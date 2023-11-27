import './Header.css';

import React from 'react';

const Header = (props) => {
  console.log('props', props);

  // const arr = [
  //   <p key="0">This is a paragraph</p>,
  //   <a key="1" href="#">Visit the homepage</a>,
  //   <h1 key="2">This is a heading!</h1>,
  // ];

  return (
    <>
      <h2>{ props.message }</h2>

      {props.children}

      {/* { arr } */}
    </>
  );
};

export default Header;
