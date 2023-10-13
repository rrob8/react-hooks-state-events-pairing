import React from 'react'


function Upvote ({upvotes, onUpvote}) {
    return (
        <div>
        <button onClick={onUpvote}>
        {upvotes} 👍 
        </button>
        </div>
    )

}




export default Upvote