import React, {useState} from 'react'
import Comment from './Comment'

function Comments ({video}) {

const [commentsToDisplay, setComments] = useState(video.comments)
const [hideOrShow, sethideOrShow] = useState('Hide')
const [sort, setSort] = useState('Sort')

    function HideShowComments () {
        if (commentsToDisplay.length > 0) {
            const hide = []
            setComments(hide)
            sethideOrShow('Show')
        }
        else {
            setComments(video.comments)
            sethideOrShow("Hide")
        }
    }

    function onSort () {

        if (sort === 'Sort') {
        sethideOrShow('Hide')
        setSort('Unsort')
        
        const sortedComments = [...video.comments] 
        sortedComments.sort((a, b) => (a.user > b.user) ? 1 : -1)
        setComments(sortedComments)
        }
        else if (sort === 'Unsort') {
            
            setComments(video.comments)
            setSort('Sort')
        }
    }
    
return (
    <div>
    <pre>
    <button onClick={HideShowComments}>
        {hideOrShow} Comments
    </button>
    <button onClick={onSort}>
        {sort} Comments By User
    </button>
    <hr className="separator" />
    <h1>{video.comments.length} Comments</h1>
    {commentsToDisplay.map((comment)=> {
       return (
       <div  key={comment.id}>
      <Comment comment={comment}/>

   </div>)
    })}
    
    </pre>
    </div>
)
}




export default Comments