function App() {
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [squareFeet, setSquareFeet] = useState(0);
  const [rooms, setRooms] = useState('');

  const calculateArea = (e) => {
    e.preventDefault();
    const squareFeet = width * length;
    setSquareFeet(squareFeet);
    console.log(squareFeet);
    setWidth('');
    setLength('');
  };
  return (
    <div className="App">
      <h1>Flooring Estimator</h1>
      <h2>How much flooring will I need?</h2>
      <p>
        In order to get the approximate cost of adding new flooring, please have
        ready the square footage of each room. You can get that by using the
        calculator below!
      </p>
      <h2>Number of Rooms</h2>
      <input
        type="text"
        placeholder="no. of rooms"
        value={rooms}
        onChange={(e) => setRooms(e.target.value)}
      />
      <h2>Area of Room</h2>
      <h3>Room Width</h3>
      <form onSubmit={calculateArea}>
        <input
          value={width}
          placeholder="feet"
          min="0"
          onChange={(e) => setWidth(e.target.value)}
        />

        <h3>Room Length</h3>
        <input
          type="text"
          value={length}
          placeholder="feet"
          onChange={(e) => setLength(e.target.value)}
        />
        <br />
        <button type="submit">calculate area</button>
      </form>
      <p>You will need to estimate for {squareFeet} sqft of flooring</p>
      <button>Continue</button>
    </div>
  );
}

export default App;
