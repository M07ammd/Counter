import './App.css'
import Header from './component/header/Header'
import Counter from './component/counter/Counter'

function App() {
  return (
    <>
      <Header />
      <div className="content-container">
        <Counter />
      </div>
    </>
  )
}

export default App
