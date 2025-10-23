import "./App.css";
import {RoomList} from "./features/rooms/components/RoomList.tsx";

function App() {

  return (
    <>
      <div>
          <RoomList display={"grid"} />
      </div>
    </>
  );
}

export default App;
