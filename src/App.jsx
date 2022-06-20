import './App.css'
import Logo from './Logo'
import Greetings from './Greetings'

function App() {
  return (
    <div className="App">
      <header className="App-header bg-love-dark min-h-screen flex flex-col items-center">
        <Logo />
        <Greetings />
      </header>
    </div>
  )
}

export default App
