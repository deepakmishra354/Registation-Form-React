import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'; 

function Form() {
  const initialData = { name: '', email: '', password: '' };
  const [inpdata, setinpdata] = useState(initialData);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    if (flag) {
      showToastMessage();
      setflag(false);
    }
  }, [flag]);

  function handledata(e) {
    setinpdata({ ...inpdata, [e.target.name]: e.target.value });
  }

  function handlesub(e) {
    e.preventDefault();
    if (!inpdata.name || !inpdata.email || !inpdata.password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Fill all the blanks!',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      setflag(true);
    }
  }

  function showToastMessage() {
    toast.success(`Hello ${inpdata.name}, You've Registered Successfully.`, {
      // position: toast.POSITION.TOP_RIGHT,
    });
  }

  return (
    <>
      <ToastContainer />
      <form className="container" onSubmit={handlesub}>
        <div className="header">
          <h1>Register Form</h1>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={inpdata.name}
            onChange={handledata}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={inpdata.email}
            onChange={handledata}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={inpdata.password}
            onChange={handledata}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="button-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
