import styles from '../styles/Hero.module.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Bienvenido a nuestra tienda</h1>
      <p>Encuentra la mejor indumentaria aquí.</p>
      <br></br>
       <Link to="/products">
                <button>Comprar ahora</button>
              </Link>
    </section>
  );
};

export default Hero;