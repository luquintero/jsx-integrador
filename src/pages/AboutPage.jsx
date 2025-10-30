import styles from '../styles/AboutPage.module.css'
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>Sobre Nosotros</h1>
      <div>
      <p>En <strong>Vibra</strong> creemos que la ropa no es solo algo que usás: es una forma de expresión, una actitud, una energía que se siente. Cada prenda que diseñamos busca acompañarte en tu día a día con estilo, comodidad y personalidad.</p>
      <br></br>
      <p>Nos inspira la calle, el arte, la música y las historias reales de las personas que se animan a mostrarse tal como son. Por eso, nuestras colecciones combinan tendencias actuales con un toque auténtico y urbano, para que puedas vestir lo que realmente vibra con vos.</p>
      <br></br>
      <p>En nuestro catálogo vas a encontrar moda para hombre, mujer, joyería y electrónica, porque creemos que el estilo no tiene una sola forma: se construye mezclando lo que te gusta y lo que te hace sentir bien.</p>
      <br></br>
      <p>Más que una marca, <strong>Vibra</strong> es una forma de vivir. Queremos que cada vez que elijas una prenda o accesorio, conectes con tu esencia y proyectes esa energía única que te distingue.</p>
      <br></br>
      <p><strong>Sentí tu vibra. Llevála puesta.</strong></p>
      </div>
      <br></br> 
       <Link to="/contact">
                <button>Contactanos</button>
              </Link>
    </div>
  );
};

export default AboutPage;