import { useState } from 'react'
import Post from './Post';

function Feed(props){

    let rows = props.posts.map((data)=>{
        return(
            <tr>
                <Post author={data.author} content={data.content} />
            </tr>
        )
    })

    return(
        <table>
            <thead>
                <tr>
                <th>Posts </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Feed