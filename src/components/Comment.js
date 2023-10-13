import React from 'react'

function Comment ({comment}) {
    return (
        <div>
        <h2>{comment.user}</h2>
       <ul>'{comment.comment}'</ul>
        </div>
    )
}





export default Comment 