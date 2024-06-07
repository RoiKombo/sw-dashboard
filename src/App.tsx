import "./App.css";
import { Search } from "./components/search";
//temporary before utiizing data services
import { mock } from "./mockdata";

function App() {
  return (
    <>
      <Search src={mock} />
    </>
  );
}

export default App;
