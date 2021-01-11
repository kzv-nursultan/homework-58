import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'

const Modal = props => {

    const listOfBtn = (
        (props.btnArray===undefined) ? null : 
        (props.btnArray).map(btnObject=>          
            <p key={btnObject.label}>
                <button className={['btn',btnObject.type].join('-')} 
                        onClick={btnObject.clicked}>
                    {btnObject.label}
                </button>
            </p>  
        )
    );

    return(
       <div>
            <Backdrop showModal = {props.showModal}/>
             <div className="Modal" 
                    style={{transform: props.showModal ? 'transformY(0)': 'transformY(-100vh)',
                    opacity: props.showModal ? '1' : '0'}}>
                    <div className="ModalParagraph">
                        <h3>{props.title} </h3>
                    </div>

                    <p>
                        text
                    </p>

                    <div className="d-flex justify-content-evenly">
                        <p>
                             <button className="ModalCloseBtn" onClick={props.closeModalWindow}>
                                Close Modal
                             </button>
                        </p>
                        {listOfBtn}
                    </div>
            </div>
       </div>
    )
};

export default Modal;