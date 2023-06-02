import Navbar from "../Navbar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//import do css
import './sobre.css'

//imports das imagens
import img from './img-sobre/img.jpg'
import img1 from './img-sobre/img1.jfif'
import img2 from './img-sobre/img2.jpg'


function index() {
  return (
    <body>
      <Navbar />
      <div className="titulo">
        <h1>Sobre</h1>
      </div>

      <div className="sobre">
        <Card sx={{ width: 500, height: 550 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nossa História
            </Typography>
            <Typography variant="body2" color="text.dark" style={{marginBottom:'30px'}}>
              Nossa equipe é formada por duas pessoas talentosas e dedicadas: Hugo de Leon e Jonathan Prates. Juntos,
              somos mais do que a soma de nossas partes individuais, trabalhando em harmonia para alcançar objetivos comuns.
              Hugo de Leon e Jonathan Prates são, dois profissionais experientes e apaixonados por seu trabalho.
              Suas habilidades em resolver problemas complexos e encontrar soluções inovadoras é admirável.
              A criatividade e visão estratégica agregam um valor único às nossas iniciativas. A comunicação clara e eficaz inspiram
              e motivam toda a equipe.
            </Typography>
          </CardContent>

        </Card>
        <Card sx={{ width: 500, height: 550 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={img1}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nossa Equipe
            </Typography>
            <Typography variant="body2" color="text.dark">
              Nossa equipe é formada por duas pessoas talentosas e dedicadas: Hugo de Leon e Jonathan Prates.
              Juntos, somos mais do que a soma de nossas partes individuais.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 500, height: 550 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={img2}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nossos Valores
            </Typography>
            <Typography variant="body2" color="text.dark">
              Nossos valores são a base que nos orienta, definindo quem somos e como agimos. Eles refletem nossas crenças, princípios e padrões éticos, moldando nossas decisões e comportamentos em todas as esferas da vida. A integridade é um dos pilares fundamentais dos nossos valores.
              Buscamos agir de forma ética e honesta.
            </Typography>
          </CardContent>
        </Card>
      </div>

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

export default index;
