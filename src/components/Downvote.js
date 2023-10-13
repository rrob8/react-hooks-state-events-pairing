import React from 'react'


function Downvote ({downvotes, onDownvote}) {
    return (
        <div>
        <button onClick={onDownvote}>
        {downvotes} 👎
        </button>
        </div>
    )

}




export default Downvote