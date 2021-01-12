import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert/Alert';
import Modal from './components/Modal/Modal';

const  App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const openAlert = () => setShowAlert(true);
  const closeAlert = () => setShowAlert(false);

  const continued = () =>{
    alert('You clicked Continue!')
  }


  const btnArray = [
    {type: 'primary', label: 'Continue', clicked: continued},
    {type: 'danger', label: 'Close', clicked: closeModal}  
  ];

 
 

  return (
    <>
      <Modal 
      showModal={showModal}
      title="Some Modal Title"
      closeModalWindow={closeModal}
      btnArray = {btnArray}
      />

      <Alert show={showAlert}
      closeAlert={closeAlert}
      type='success'
      dismiss={closeAlert}
      >
        'This some text'
      </Alert>

     <div className="container text-center mt-4 d-flex justify-content-evenly bg-secondary p-4">
        <button className="btn-warning" onClick={openModal}>Show Modal</button>
        <button className="btn-info" onClick={openAlert}>Show Alert</button>
     </div>
    </>
  );
}

export default App;
