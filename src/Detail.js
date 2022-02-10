import React from 'react';
import { useLocation } from 'react-router-dom';

function Detail() {
  const {
    state: { roomList },
  } = useLocation();
  console.log(useLocation());
  console.log(roomList);
  const total = () => {};
  return (
    <>
      <article>
        <h2>Quote</h2>
        <h2>
          Total Price $
          {roomList.reduce((subtotal, room) => {
            return subtotal + room.unitPrice * room.sqft;
          }, 0)}
        </h2>
      </article>
      <table>
        <tr>
          <td>Room</td>
          <td>Type</td>
          <td>Sq Foot</td>
          <td>Price</td>
          <td>Subtotal</td>
        </tr>
        {roomList.map((room) => {
          return (
            <tr>
              <td>{room.name}</td>
              <td>{room.floorType}</td>
              <td>{room.sqft}</td>
              <td>${room.unitPrice}/sqft</td>
              <td>${room.unitPrice * room.sqft}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Detail;
