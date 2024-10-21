"use client";
import { useState } from 'react';

const ContactForm = () => {
  // State untuk input form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handler untuk mengubah input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Tampilkan pesan setelah submit
  };

  // Handler untuk clear form
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Contact Form</h2>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            ></textarea>
          </div>

          <div>
            <button type="submit" style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Submit
            </button>
            <button type="button" onClick={handleClear} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Clear
            </button>
          </div>
        </form>
      ) : (
        <div>

          <h2>Terima Kasih!</h2>
          <p>
            Nama: {formData.name},<br />
            Email: {formData.email},<br />
            Pesan: {formData.message},<br /><br />
            Data di atas akan segera diinput ke database. Terima kasih!
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
