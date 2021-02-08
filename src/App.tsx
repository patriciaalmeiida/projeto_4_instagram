import React from "react";
import './App.css';
import { FiUser } from "react-icons/fi";

import Logo from "./image/logo-instagram.png";
import UsuarioPerfil from "./components/usuario/User";
import Posts from "./components/post/Posts";
import Stories from "./components/stories/Stories";
import Form from "./components/form/form";

function App() {
  return (
    <>
      <div className="header">
        <header>
          <img src={Logo} alt="Logo Instagram" />
          <div className="top-info">
            <span>
              <FiUser />
              Patricia 
            </span>
          </div>
        </header>
      </div>
      <div className="home">
        <div className="post-container">
          <Form />
          <Posts />
        </div>
        <div>
          <UsuarioPerfil />
          <div className="stories">
            <h2>Stories</h2>
            <Stories />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
