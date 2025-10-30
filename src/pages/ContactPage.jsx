import ContactForm from '../components/ContactForm';
import styles from '../styles/ContactPage.module.css'

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <h1>Contacto</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;