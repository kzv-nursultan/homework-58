import React from 'react';
import Backdrop from '../Backdrop/Backdrop'; 
import './Alert.css'

const Alert = props => {

    return (
        <div onClick={(props.dismiss)===undefined ? props.closeAlert : null}>
            <Backdrop showModal = {props.show}/>

                  <div className = 'Alert'
                        style={{transform: props.show ? 'transformY(0)':'transformY(-100vh)',
                        opacity: props.show ? '1' : '0'}}>

                           <div className={['alert', props.type].join('-')}>

                                <p className='AlertParagraph'>
                                    {props.children}

                                    {(props.dismiss)===undefined ? null :
                                    <button className = "AlertCloseBtn" 
                                            onClick={props.dismiss}>
                                         X
                                    </button>} 
                                    
                                 </p>

                           </div>
                    </div>
        </div>
    )
};

export default Alert;

