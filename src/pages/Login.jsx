import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login", data)
      .then((res) => {
        navigate("/");
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
      })

      .catch((error) => {
        if (error.response?.status === 404) {
          alert("Tu correo electrónico o contraseña es incorrectas");
        } else {
          console.log(error.response?.data);
        }
      })
  }

  return (
    <>
      {/* <CreateLogin /> */}
      <Form
        className='form__bootstrap'
        onSubmit={handleSubmit(submit)}>
        <div className='form__div'>
          <p className='div__title'>Welcome! Enter your email and password to continue</p>
          <div className="div__test">
            <p>Test data : </p>
            <p><i className="fa-regular fa-envelope"></i> hnrazogue@gmail.com</p>
            <p><i className="fa-solid fa-unlock-keyhole"></i> 1234567890 </p>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className='form__input'
            type="email"
            placeholder="Enter email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className='form__input'
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  );
};

export default Login;