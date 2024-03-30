function Feed(props){

    let rows = props.posts.map((data)=>{
        return(
            <tr>
                <td>{data.author}</td>
                <td>{data.content}</td>
            </tr>
        )
    })

    return(
        <table>
            <thead>
                <tr>
                <th>Author </th>
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