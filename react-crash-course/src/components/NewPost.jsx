import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <form
      className={classes.form}
      onSubmit={event => {
        event.preventDefault();
        const postData = {body: body, author: author};
        props.addPostHandler(postData);
        props.setModalIsVisible(false);
      }}
    >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={event => setBody(event.target.value)} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={event => setAuthor(event.target.value)} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={() => props.setModalIsVisible(false)}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
