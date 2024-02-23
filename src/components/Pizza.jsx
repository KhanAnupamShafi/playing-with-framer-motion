import { Outlet } from 'react-router-dom';
import Header from './Pizza/Header';
import Modal from './Pizza/Modal';
function Pizza({ showModal }) {
  return (
    <>
      <Header />
      <Outlet />

      <Modal showModal={showModal} />
    </>
  );
}

export default Pizza;
