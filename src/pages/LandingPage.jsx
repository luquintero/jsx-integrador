import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import styles from '../styles/LandingPage.module.css';

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 4)); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error cargando productos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className={styles.landing}>
      <Hero />
      <section className={styles.about}>
        <h2>Sobre Vibra</h2>
        <p>En Vibra creemos que la ropa no es solo algo que usas, es la energía que llevas puesta.</p>
        <br></br>
        <Link to="/about">
          <button>Conoce Más</button>
        </Link>
      </section>
      <section className={styles.featured}>
        <h2>Productos Destacados</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <br></br>
        <Link to="/products">
          <button>Ver Todos los Productos</button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;