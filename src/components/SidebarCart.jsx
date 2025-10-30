import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
import { useState } from 'react';
import styles from '../styles/SidebarCart.module.css';

const SidebarCart = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotal } = useCart();
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: null, itemId: null }); 

  const handleRemove = (itemId) => {
    setModalConfig({ isOpen: true, type: 'remove', itemId });
  };

  const handleAction = (action) => {
    setModalConfig({ isOpen: true, type: action, itemId: null });
  };

  const confirmAction = () => {
    switch (modalConfig.type) {
      case 'remove':
        removeFromCart(modalConfig.itemId);
        break;
      case 'clear':
        clearCart();
        break;
      case 'purchase':
        alert('Compra realizada!');
        clearCart();
        onClose();
        break;
      default:
        break;
    }
    setModalConfig({ isOpen: false, type: null, itemId: null });
    onClose();  
  };

  const cancelAction = () => {
    setModalConfig({ isOpen: false, type: null, itemId: null });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <h2>Tu carrito</h2>
          <button onClick={onClose}>✕</button>
        </div>
        <div className={styles.content}>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <div className={styles.details}>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <div className={styles.quantityControls}>
                    <button 
                      onClick={() => {
                        if (item.quantity > 1) {
                          updateQuantity(item.id, item.quantity - 1);
                        } else {
                          removeFromCart(item.id);
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className={styles.remove} onClick={() => handleRemove(item.id)}>x</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className={styles.footer}>
            <p className={styles.total}>Total: ${getTotal().toFixed(2)}</p>
            <button onClick={() => handleAction('clear')}>Vaciar carrito</button>
            <button onClick={() => handleAction('purchase')}>Finalizar compra</button>
          </div>
        )}
      </div>
      {modalConfig.isOpen && ( 
        <CartModal 
          type={modalConfig.type} 
          onConfirm={confirmAction} 
          onCancel={cancelAction} 
        />
      )}
    </>
  );
};

export default SidebarCart;
