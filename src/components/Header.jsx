import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import SidebarCart from './SidebarCart';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isCartOpen, setIsCartOpen, getTotalItems } = useCart();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">VS</Link>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/products">Productos</Link>
          <Link to="/contact">Contacto</Link>
          <button className={styles.cartButton} onClick={() => setIsCartOpen(true)}>
            🛒 <span className={styles.cartCount}>{getTotalItems()}</span> 
          </button>
        </nav>
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </header>
      <SidebarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;