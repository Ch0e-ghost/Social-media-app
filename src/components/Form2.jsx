import { useState } from "react";

function Form2(props){

    const [content, setContent] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        //alert("Submitted!")
        if(content === ""){
            alert("Content is required")
        }
        else{
        console.log(content)
        props.onNewSubmit({content})
        setContent("")
        }

        //send this to table?


    }


    let handleContentChange = (event) => {
        setContent(event.target.value)
    }

    return (
    <form onSubmit={handleSubmit}>
            <label for='postContent'>Comment: </label>
            <input type="text" name='postContent' onChange={handleContentChange} value={content}/>
            <br/>
            <br/>
            <input type="submit" disabled={content ===""}/>
            <br/>
            <br/>

          </form>
    )
    }
    

    export default Form2