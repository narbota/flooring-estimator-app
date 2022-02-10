import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { floorList } from './Constants';

export default function Wood(props) {
  const [roomList, setRoomListTo] = useState([]);

  const {
    state: { noOfRooms },
  } = useLocation();

  useEffect(() => {
    let newRoomList = [];

    for (let i = 0; i < noOfRooms; i++) {
      newRoomList.push({
        id: i,
        name: '',
        sqft: '',
        floorType: '',
      });
    }
    setRoomListTo(newRoomList);
  }, [noOfRooms]);

  const navigate = useNavigate();
  const toDetailComponent = () => {
    navigate('/Detail', { state: { roomList } });
  };

  return (
    <>
      {roomList.map((room) => {
        console.log(room);

        return (
          <>
            <div style={{ margin: '1rem', padding: '5px' }}>
              <label>Room Name:</label>
              <input
                type="text"
                name="room_name"
                value={room.name}
                onChange={(e) => {
                  setRoomListTo(
                    roomList.map((nestedRoom) => {
                      if (nestedRoom.id === room.id) {
                        return {
                          ...nestedRoom,
                          name: e.target.value,
                        };
                      }
                      return nestedRoom;
                    })
                  );
                }}
              />
              <br />
              <label>Square Feet</label>
              <input
                type="text"
                name="sqft"
                value={room.sqft}
                onChange={(e) => {
                  setRoomListTo(
                    roomList.map((nestedRoom) => {
                      if (nestedRoom.id === room.id) {
                        return {
                          ...nestedRoom,
                          sqft: e.target.value,
                        };
                      }
                      return nestedRoom;
                    })
                  );
                }}
              />
              <br />
              <label>Floor Type</label>
              <select
                name="floor_type"
                id="floor_type"
                onChange={(e) => {
                  setRoomListTo(
                    roomList.map((nestedRoom) => {
                      if (nestedRoom.id === room.id) {
                        return {
                          ...nestedRoom,
                          floorType: e.target.value,
                          unitPrice: floorList.filter(
                            (floor) => floor.type === e.target.value
                          )[0].price,
                        };
                      }
                      return nestedRoom;
                    })
                  );
                }}
              >
                {floorList.map((floor) => {
                  return <option value={floor.type}>{floor.type}</option>;
                })}
              </select>
            </div>
          </>
        );
      })}
      <button type="submit" onClick={toDetailComponent}>
        Quote
      </button>
    </>
  );
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
