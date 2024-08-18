import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap aquí

const Login = () => {
  // Esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    nombre_usuario: Yup.string()
      .required('El nombre de usuario es obligatorio'),
    contraseña_usuario: Yup.string()
      .required('La contraseña es obligatoria'),
  });

  // Función de envío de formulario
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', values);

      // Si el login es exitoso
      if (response.status === 200) {
        alert('Usuario correcto');
        // Puedes agregar redirección aquí si lo necesitas, por ejemplo:
        // window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Error en el login:', error);  // Para depuración
      // Si hay un error de respuesta de la API
      if (error.response && error.response.data.message) {
        setErrors({ apiError: error.response.data.message });
      } else {
        setErrors({ apiError: 'Error en el servidor' });
      }
      alert('Usuario incorrecto');
    }
    setSubmitting(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h1 className="text-center mb-4">Login</h1>
        <Formik
          initialValues={{ nombre_usuario: '', contraseña_usuario: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="nombre_usuario" className="form-label">Nombre de Usuario</label>
                <Field
                  type="text"
                  name="nombre_usuario"
                  className="form-control"
                />
                <ErrorMessage name="nombre_usuario" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label htmlFor="contraseña_usuario" className="form-label">Contraseña</label>
                <Field
                  type="password"
                  name="contraseña_usuario"
                  className="form-control"
                />
                <ErrorMessage name="contraseña_usuario" component="div" className="text-danger" />
              </div>

              {errors.apiError && <div className="alert alert-danger">{errors.apiError}</div>}

              <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Iniciar Sesión'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
