import CharacterScreen from "./pages/CharacterScreen";
import PlanetScreen from "./pages/PlanetScreen";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CharacterScreen />} />      
          <Route path="/planets" element={<PlanetScreen />} />
          <Route path="/planets/:id"/>
          <Route path="/characters/:id"/>
        </Routes>
      </Router>
    </>

  );
}