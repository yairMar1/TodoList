import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

function App() {
  const [mode, setMode] = useState('lightMode')

  return (
    <>
      <div className={`app ${mode}`}>
        <div className="container">
          <Header mode={mode} setMode={setMode} />
          <Todo />
          <TodoList />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
