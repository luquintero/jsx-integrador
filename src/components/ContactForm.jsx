import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const validationSchema = Yup.object({
    nombre: Yup.string().min(2, 'Mínimo 2 caracteres').required('Requerido'),
    apellido: Yup.string().min(2, 'Mínimo 2 caracteres').required('Requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    asunto: Yup.string().required('Requerido'),
  });

  return (
    <Formik
      initialValues={{ nombre: '', apellido: '', email: '', asunto: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert('Mensaje enviado correctamente!');
        actions.resetForm();
      }}
    >
      <Form className={styles.form}>
        <div>
        <Field name="nombre" placeholder="Nombre" />
        <ErrorMessage name="nombre" component="div" />
        </div>
        <div>
        <Field name="apellido" placeholder="Apellido" />
        <ErrorMessage name="apellido" component="div" />
        </div>
        <div>
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        </div>
        <div>
        <Field name="asunto" placeholder="Asunto" />
        <ErrorMessage name="asunto" component="div" />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;