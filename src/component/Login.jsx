// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './login.css'; // Optional: for styling

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Since no authentication: just redirect after form validation
//     if (formData.email && formData.password) {
//       navigate('/expenses'); // Redirect to expense tracker
//     } else {
//       alert('Please enter both email and password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email *</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password *</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>

//       <div className="additional-links">
//         <p>
//           Don't have an account? <Link to="/registration">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../login.css'; // Make sure this path is correct

// function Login() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.email && formData.password) {
//       // Navigate to expense tracker (you can change the path if needed)
//       navigate('/expenses');
//     } else {
//       alert('Please enter both email and password.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter password"
//             required
//           />
//         </div>

//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password");
      return;
    }

    console.log("Login attempt with:", formData);
    localStorage.setItem('userEmail', formData.email);
    navigate('/expenses');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <button onClick={() => navigate(-1)} className="back-button">
            &larr; Back
          </button>
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="additional-links">
          <p>Don't have an account? <Link to="/registration">Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;