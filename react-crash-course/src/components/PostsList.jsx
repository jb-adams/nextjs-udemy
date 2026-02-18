import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <>
      {modalIsVisible && (
        <Modal setModalIsVisible={setModalIsVisible}>
          <NewPost
            setBody={setBody}
            setAuthor={setAuthor}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={author} body={body} />
        <Post author="Manuel" body="Check out the full course!" />
      </ul>
    </>
  )
}

export default PostsList;