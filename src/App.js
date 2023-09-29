import './App.css';
import Notes from './components/notes';
import { BrowserRouter, Route, Routes as Switch, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Notes />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
