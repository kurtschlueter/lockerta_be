import React from 'react';


const TestPresenter = ({
  inputHandler,
  save
}) => {
  return (
    <div>
      <h1> Tomas Testing from test TestPresenter!</h1>
      <input onChange={inputHandler} />
      <button onClick={save}>Save/TestReducer</button>
    </div>
  );
};

export default TestPresenter;
