import {useState, useEffect, useCallback} from 'react'
import Level from './components/Level';
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";


function App() {
  const [score, setScore] = useState(0) // Maintains score
  const [best, setBest] = useState(0) // Stores highScore
  const [level,setLevel] = useState(0) // Maintains current game Level with maximum level being 8
  const [lost,setLost] = useState(false)
  document.title="Memory Game"
  // Seeds for image array
  // Reset the game
  const lostGame = useCallback(() => {
    setLost(true)
    setLevel(0)
  },[])
  const restart = useCallback(() => {
    setLost(false)
    setScore(0)
    setLevel(1)
  },[])
  // Increment Game Level
  const incrementLvl = useCallback(() => {
    setLevel(prevLevel => prevLevel + 1)
  },[])
  // Increment Score.
  const incrementScore = useCallback(() => {
    setScore(prevScore => prevScore + 1)
  },[])
  
  const maxScore = useCallback((arg) => {
    if(arg === 0 ) return 0 
    if(arg === 1) return 3
    return arg + 2 + maxScore(arg - 1)
  },[])
    // Get High Score from localStorage and update it if current score is higher
  useEffect(() => {
    // gets and sets high score.
    const highScore = localStorage.getItem('highScore')
    if(highScore && highScore > best){
      setBest(highScore)
    }
    if(best < score){
      setBest(score)
      localStorage.setItem('highScore',JSON.stringify(best))
    }
  },[score,best])
  // Updates level on score reaching.
  useEffect(() => {
    if(score === maxScore(level)  && score > 0){
      incrementLvl()
    }
  },[score,level,incrementLvl,maxScore])
  return (
    <div className="overflow-x-hidden font-Mochiy text-gray-300 select-none text-center">
    <Nav current={score} best={best}/>
    {level === 0 || lost ? <LandingPage incrementLvl={incrementLvl} restart={restart} lost ={lost}/> : null}
    {level > 0 && !lost ? <Level level={level} incrementLvl={incrementLvl} score={score} incrementScore={incrementScore} key={level} lostGame={lostGame} />: null}
    </div>
  );
}

export default App;
