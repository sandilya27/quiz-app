import { useSelector } from 'react-redux';
import './App.css';
import Menu from './component/Menu';
import Quiz from './component/Quiz';
import Score from './component/Score';

function App() {
  const {position} = useSelector((store)=>store.gameState)
  return (
    <div className="App">
      {position==="menu" && <Menu/>}
      {position==="quiz" && <Quiz/>}
      {position==="score" && <Score/>}
    </div>
  );
}

export default App;
