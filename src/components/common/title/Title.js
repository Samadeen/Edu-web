import React from 'react';

const Title = ({ subtitle, title }) => {
  return (
    <>
      <div id='headings'>
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Title;
