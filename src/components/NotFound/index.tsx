import React from "react";
import Navbar from "../Navbar";

function NotFound() {
  return (
    <body>
      <Navbar />
      <h1>NOT FOUND</h1>
      <h2>Vite + React + TS (Hamburger + Responsive + Router)</h2>
      <footer>
        <div>
          <h4>Contato</h4>
          <p>Email: contato@example.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </div>

        <div>
          <h4>Endereço</h4>
          <p>Rua Exemplo, 123</p>
          <p>Cidade, Estado</p>
        </div>

        <div>
          <h4>Redes Sociais</h4>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.instagram.com">Instagram</a>
        </div>

        <div>
          <h4>Horário de Funcionamento</h4>
          <p>Segunda a Sexta: 9h às 18h</p>
          <p>Sábado: 9h às 12h</p>
        </div>

        <div>
          <h4>Políticas</h4>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Assine nossa newsletter para receber novidades.</p>
          <form>
            <input type="email" placeholder="Seu email" required/>
              <button type="submit">Assinar</button>
          </form>
        </div>
      </footer>
    </body>
  );
}

export default NotFound;
