import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useHttp from '../hooks/use-http';
import { getAllComments } from '../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const param = useParams();
  const { quoteId } = param;
  const {sendRequest , status , data : loadedComments} = useHttp(getAllComments);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(()=>{
    sendRequest(quoteId);
  },[sendRequest,quoteId]);

  
  const addedCommentHandler = useCallback(()=>{
    sendRequest(quoteId);
  },[sendRequest,quoteId]);
  

  let comment;
  if(status==='pending'){
    comment = <div className='centered'>
      <LoadingSpinner/>
    </div>
  }
  if(status==='completed' && (loadedComments || loadedComments.length>0)){
    comment = <CommentsList  comments={loadedComments}/>
  }
  if(status==='completed' && (!loadedComments || loadedComments.length===0)){
    comment =  <p>No comments were added yet</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm id={quoteId} onAddedComment ={addedCommentHandler} />}
      {comment}
    </section>
  );
};

export default Comments;
