// import "./components/styles/App";
import Homepage from "./components/Homepage";
import CardBack from "./components/CardBack";
import CardBackDetails from "./components/CardBackDetails";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="root">
        
          <Route path="/" element={Homepage} />{" "}
          {/* exact tells the router to only show if this is given -> otherwise it will always listen to this first */}
          <Route path="/cardBack" element={CardBack} />
          <Route path="/cardBack/:id" element={CardBackDetails} />
          
        
      </div>
    </Router>
  );
}

export default App;