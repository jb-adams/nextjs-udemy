import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <MainHeader setModalIsVisible={setModalIsVisible} />
      <main>
        <PostsList modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
      </main>
    </>
  );
}

export default App;
