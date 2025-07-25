import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VendorForm = ({ mode, vendorId }) => {
  const [formData, setFormData] = useState({
    vendorName: '',
    bankAccountNo: '',
    bankName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    zipCode: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (mode === 'edit' && vendorId) {
      fetch(`http://localhost:5000/vendors/${vendorId}`)
        .then(res => res.json())
        .then(data => setFormData(data))
        .catch(err => {
          console.error("Error fetching vendor:", err);
          setError("Failed to fetch vendor details.");
        });
    }
  }, [mode, vendorId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const url = mode === 'add'
      ? 'http://localhost:5000/vendors'
      : `http://localhost:5000/vendors/${vendorId}`;
    const method = mode === 'add' ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        navigate('/dashboard');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error occurred.");
    }
  };

  const requiredFields = ['vendorName', 'bankAccountNo', 'bankName', 'addressLine2'];

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {mode === 'add' ? 'Add New Vendor' : 'Edit Vendor'}
      </h2>

      {Object.keys(formData).map((key) => (
        <input
          key={key}
          name={key}
          value={formData[key]}
          onChange={handleChange}
          placeholder={key}
          className="w-full border px-3 py-2 rounded"
          required={requiredFields.includes(key)}
        />
      ))}

      {error && <p>{error}</p>}

      <button type="submit">
        {mode === 'add' ? 'Add Vendor' : 'Update Vendor'}
      </button>
    </form>
  );
};

export default VendorForm;
