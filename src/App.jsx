import './App.css'
import Feed from './components/Feed';
import Form from './components/Form';
import { useState } from 'react'
function App(){ 

  const [names, setNames] = useState([])

  let handleNewSubmission = (data) => {
    setNames([...names, data])
  }

  return(
    <div>
      <h1>Fakebook!</h1>
      
      <Form onNewSubmit={handleNewSubmission}/>
        
      <Feed posts={names}/>
    
    </div>
  )
}
export default App
