import React, { useState } from 'react';

import Modal2 from './Modal2';

const Play2 = () => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = (): void => setShow(false);
    
    return (
        <div>
            { show ? <div onClick={closeModal} className="back-drop"></div> : null }

            <button className="open-modal-btn" onClick={openModal}>Open Modal</button>

            <Modal2
                className="modal"
                show={show}
                close={closeModal}>
                    Maybe aircrafts fly very high because they don't want to be seen in plane sight?
            </Modal2>
        </div>
    );
}

export default Play2;
