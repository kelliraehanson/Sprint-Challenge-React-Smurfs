import React from 'react';


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>

      <div className="delete">
      <button onClick={() => props.deleteSmurf(props.id)}>
        DELETE SMURF
      </button></div>

    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

