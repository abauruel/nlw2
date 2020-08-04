import React from "react";
import whatsappIcon from "../../images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="Avatar"
        />
        <div>
          <strong>Nome do Professor</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratorio e por mudar a vida das
        pessoas atraves de suas experiencias
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
