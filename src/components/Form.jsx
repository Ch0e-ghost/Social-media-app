import { useState } from "react";



function Form(props){

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        //alert("Submitted!")
        if(author === "" || content === ""){
            alert("Author and Content are required")
        }
        else{
        console.log(author, content)
        props.onNewSubmit({author, content})
        setAuthor("")
        setContent("")
        }

        //send this to table?


    }

    

    let handleAuthorChange = (event) => {
        //console.log(event.target.value)
        setAuthor(event.target.value)
    }

    let handleContentChange = (event) => {
        setContent(event.target.value)
    }

    return (
    <form onSubmit={handleSubmit}>
            <label for="postAuthor">Name</label>
            <input type="text" name='postAuthor' onChange={handleAuthorChange} value={author}/>
            <br/>
            <label for='postContent'>What you thinking</label>
            <input type="text" name='postContent' onChange={handleContentChange} value={content}/>
            <br/>
            <br/>
            <input type="submit" disabled={author ==="" || content ===""}/>
          </form>
    )
    }
    

    export default Form