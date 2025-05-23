import { ReactDom } from 'react'

export const Modal = ({ children, handleCloseModal }) => {

  return ReactDom.createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModal} className="modal-underlay" />
      <div className="modal-content">{children}</div>
    </div>,

    document.querySelector("#portal")
  )
}