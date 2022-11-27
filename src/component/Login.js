import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";
import AuthService from '../services/AuthService'



const required = (value) => {   //dans le return input...validations={[required]}
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Ce champ est requis!
      </div>
    );
  }
};


const Login = () => {
  let navigate = useNavigate(); // Si la vérification(username et password) est correcte, nous appelons la AuthService.login()méthode, puis dirigeons l'utilisateur vers la page de profil à l' aide du useNavigate()

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // const onChangeUsername = (e) => {
  //   const username = e.target.value;
  //   setUsername(username);
  // };

  // const onChangePassword = (e) => {
  //   const password = e.target.value;
  //   setPassword(password);
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();//Nous allons appeler validateAll()() méthode Form) pour vérifier les fonctions de validation dans validations

    if (checkBtn.current.context._errors.length === 0) {  //CheckButton nous aide à vérifier si la validation du formulaire est réussie ou non. Ce bouton ne s'affichera donc pas sur le formulaire.
      AuthService.login(username, password).then(  // Si la vérification est correcte, nous appelons la AuthService.login()
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-2 pos">
      <div className="card card-container ">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Login;