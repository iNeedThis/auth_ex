import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class FlashMessage extends React.Component{
  componentDidMount(){
    const { message, type } = this.props
    this.returnFlash(message, type)
  }

  returnFlash(message, type) {
    let options = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    }

    switch (type) {
      case "success":
        return toast.success(message, options)
      case "info":
        return toast.info(message, options)
      case "warn":
        return toast.warn(message, options)
      case "error":
        return toast.error(message, options)
      default:
        return toast(message, options)
    }
  }

  render() {
    return (
      <ToastContainer />
    );
  }
}

export default FlashMessage
