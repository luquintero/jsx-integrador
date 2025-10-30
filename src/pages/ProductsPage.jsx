import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import styles from '../styles/ProductsPage.module.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  const categoryMapping = {
    'electronics': 'Electrónica',
    'jewelery': 'Joyería',
    "men's clothing": 'Ropa de Hombre',
    "women's clothing": 'Ropa de Mujer',
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error cargando productos:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className={styles.products}>
      <h1>Productos</h1>
      <div className={styles.filter}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {categoryMapping[category] || category} 
            </option>
          ))}
        </select>
      </div>
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
