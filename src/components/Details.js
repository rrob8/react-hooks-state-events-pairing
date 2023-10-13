import React, {useState} from 'react'
import Upvote from './Upvote'
import Downvote from './Downvote'
import Comments from './Comments'

function Details ({video}) {

    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    function onUpvote () {
        const newUpvote = upvotes + 1
       setUpvotes(newUpvote)
    }

    function onDownvote () {
        const newDownvote = downvotes +1
       setDownvotes(newDownvote)
    }


    return (
        <div>
          <h1>{video.title}</h1>
          <p>{video.views} Views|Uploaded {video.createdAt}</p>
          <div className='rowC'>
          <Upvote video={video} onUpvote={onUpvote} upvotes={upvotes}/>
          <Downvote downvotes={downvotes} onDownvote={onDownvote}/>
          
          </div >
          <Comments video={video}/>
        </div>
    )
}







export default Details 