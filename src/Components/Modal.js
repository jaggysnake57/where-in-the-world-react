import React, { forwardRef } from 'react';
import '../css/Components/Modal.css';

const Modal = forwardRef(({ message, closeModal }, ref) => {
	return (
		<div class="modal" ref={ref}>
			<div className="modalBox">
				<h4>{message}</h4>
				<button onClick={() => closeModal()} className="btn">
					close
				</button>
			</div>
		</div>
	);
});

export default Modal;
