import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Estimator() {
  const [noOfRooms, setNoOfRooms] = useState({ value: '' });

  const navigate = useNavigate();
  const toWoodComponent = () => {
    navigate('/Wood', { state: { noOfRooms } });
  };
  console.log(noOfRooms);
  return (
    <div>
      <form>
        <label>How many rooms are involved in this project?</label>
        <select
          value={noOfRooms}
          onChange={(e) => {
            setNoOfRooms(e.target.value);
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
      <p>please continue to the next page</p>
      <button onClick={toWoodComponent}>Next page</button>
    </div>
  );
}

export default Estimator;
