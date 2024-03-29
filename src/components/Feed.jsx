function Feed(props){
    let rows = props.posts.map((data)=>{
        return(
            <tr>
                <td>
                    <Post author={data.author} content={data.content}/>
                </td>
            </tr>
        )
    })

    return(
        <table>
            <thead>
                <tr>
                <th>Author Name</th>
                <th>Content</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Feed