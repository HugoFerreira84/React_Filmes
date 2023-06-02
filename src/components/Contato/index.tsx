import React from "react";
import Navbar from "../Navbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import do css
import './contato.css'
import { Button } from "react-bootstrap";

//import do Form

//import da imagens


function Contato() {

  return (

    <body>
      <Navbar />
      <div className="container">
        <img src={'../../src/img/hugo.jpeg'} alt="" />
        <img src={'../../src/img/Jonathan.jpg'} alt="" />
      </div>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '40ch' },
        }}
        noValidate
        autoComplete="off"

      >
        <div className="form">
        <h1 className="form" style={{ color: '#fff', marginTop: '100px' }}>Contato</h1>
          <TextField
            id="outlined-multiline-flexible"
            label="Nome"
            color="primary"
            focused
            multiline
            maxRows={6}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="E-mail"
            color="primary"
            focused
            multiline
            maxRows={6}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Telefone"
            color="primary"
            focused
            multiline
            maxRows={6}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Github"
            color="primary"
            focused
            multiline
            maxRows={6}
          />
          <Button variant="contained" size={'lg'} style={{ padding: '10px', width: '200px', backgroundColor: '#00BFFF', color: '#fff', border: 'none', borderRadius:'15px' }}>
            Enviar
          </Button>
        </div>
     

      </Box>
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
            <input type="email" placeholder="Seu email" required />
            <button type="submit">Assinar</button>
          </form>
        </div>
      </footer>
    </body>
  );
}

export default Contato;
