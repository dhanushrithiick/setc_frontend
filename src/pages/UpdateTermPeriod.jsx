import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/UpdateTermPeriod.css';

const UpdateTermPeriod = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    startMonth: '',
    endMonth: '',
    year: '',
  });

  const fetchCurrentPeriod = async () => {
    try {
      const res = await fetch('/excom-period');
      const data = await res.json();
      if (res.ok) {
        setFormData({
          startMonth: data.startMonth,
          endMonth: data.endMonth,
          year: data.year,
        });
      }
    } catch (error) {
      console.error("Failed to fetch period", error);
    }
  };

  useEffect(() => {
    fetchCurrentPeriod();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://setc-backend.onrender.com/excom-period', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Term updated successfully!");
        navigate('/excompanel');
      } else {
        alert(result.message || "Failed to update term.");
      }
    } catch (error) {
      console.error("Error updating term:", error);
      alert("Server error.");
    }
  };

  return (
    <>
      <div className="update_term_period_nav">
        <img
          src="./images/arrow_back.svg"
          className="update_term_period_nav_back"
          onClick={() => navigate('/excompanel')}
          alt="Back"
        />
        <div className="update_term_period_nav_text">Update Excom Term</div>
      </div>

      <div className="update_term_period_container">
        <form onSubmit={handleSubmit} className="update_term_period_form">
          <label>Start Month:</label>
          <input
            type="text"
            name="startMonth"
            value={formData.startMonth}
            onChange={handleChange}
            className="update_term_period_input"
            required
          />

          <label>End Month:</label>
          <input
            type="text"
            name="endMonth"
            value={formData.endMonth}
            onChange={handleChange}
            className="update_term_period_input"
            required
          />

          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="update_term_period_input year_input"
            required
          />


          <button type="submit" className="update_term_period_submit_btn">
            Update Term
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateTermPeriod;
