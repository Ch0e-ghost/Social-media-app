import React from 'react';
function Comment(props){
  let rows = props.content.map((data)=>{
    return(
        <tr>
            <td>{data.content} </td> 
        </tr>
    )
})

return(
    <table>
        <thead>
            <tr>
            <th>Comments </th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
)
 
  /*return(
    
    <div>
      <p>{props.content}</p>
    </div>
  ) */
}
export default Comment 