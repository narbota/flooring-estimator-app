import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Wood(props) {
  const [roomList, setRoomListTo] = useState({
    id: '',
    name: '',
    sqft: '',
    floorType: '',
  });

  const {
    state: { noOfRooms },
  } = useLocation();

  useEffect(() => {
    let newRoomList = {};

    for (let i = 0; i < noOfRooms; i++) {
      newRoomList[i] = {
        id: i,
        name: '',
        sqft: '',
        floorType: '',
      };
    }
    setRoomListTo(newRoomList);
  }, [noOfRooms]);

  return Object.keys(roomList).map((key) => {
    const room = roomList[key];

    return (
      <div key={key}>
        <input
          type="text"
          name="room_name"
          value={room.name}
          onChange={(e) => {
            setRoomListTo({
              ...roomList,
              name: e.target.value,
            });
          }}
        />
        <input
          type="text"
          name="sqft"
          value={room.sqft}
          onChange={(e) => {
            setRoomListTo({
              ...roomList,
              sqft: e.target.value,
            });
          }}
        />
        <select name="floor_type" id="floor_type">
          <option value="tile">tile</option>
          <option value="carpet">carpet</option>
          <option value="hardwood">hardwood</option>
          <option value="vinyl">vinyl</option>
        </select>
      </div>
    );
  });
}

// <input
//          type="text"
//          name="sqft"
//          id="sqft"
//          key="sqft"
//          value={room.sqft}
//          onChange={(e) => {
//            const newRoomList = roomList;
//            newRoomList[key].sqft = e.target.value;
//            setRoomListTo(newRoomList);
//          }}
//        />
//        <select name="" id="">
//          <option value="wood">wood</option>
//          <option value="carpet">carpet</option>
//          <option value="vinyl">vinyl</option>
//          <option value="tile">tile</option>
//        </select>
// console.log(location);
// const floorData = [
//   { type: 'hardwood', price: 4.32, id: 1 },
//   { type: 'tile', price: 3.61, id: 2 },
//   { type: 'carpet', price: 9.32, id: 3 },
//   { type: 'Vinyl', price: 5.38, id: 4 },

// ];
// const changeSquareFeet = (e) => {
//   const newRoomList = roomList;
//   newRoomList[key].sqft = e.target.value;
//   setRoomListTo(newRoomList);
//   console.log(newRoomList);
