import React from 'react';
import Post from './components/Post';
import Feed from './components/Feed';
import Form from './components/Form';
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
