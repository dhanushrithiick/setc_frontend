import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/addAchievement.css'; // Reusing the same styles

const AddAchievement = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    years: '',
    imageUrl: '',
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'exip3afi');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dyb53crh2/image/upload', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      setFormData((prev) => ({
        ...prev,
        imageUrl: result.secure_url,
      }));
    } catch (error) {
      console.error('Upload error:', error);
      alert('Image upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://setc-backend.onrender.com/achievement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Achievement added successfully!');
        navigate('/achievementpanel');
      } else {
        alert('Failed to add achievement');
      }
    } catch (error) {
      console.error('Add error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <>

    <div className="add_achievement_nav">
        <img
          src="./images/arrow_back.svg"
          className="add_achievement_nav_back"
          onClick={() => navigate('/achievementpanel')}
          alt="Back"
        />
        <div className="add_achievement_nav_text">Add Achievement</div>
      </div>

    <div className="add_achievement_container">
      <form onSubmit={handleSubmit} className="add_achievement_form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="add_achievement_input"
          required
        />

        <label>Years:</label>
        <input
          type="text"
          name="years"
          value={formData.years}
          onChange={handleChange}
          className="add_achievement_input"
          required
        />

        <label>Image:</label>
        <div className="add_achievement_image_section">
          <div className="add_achievement_image_preview">
            {formData.imageUrl ? (
              <a href={formData.imageUrl} target="_blank" rel="noopener noreferrer">
                View image link
              </a>
            ) : (
              <span style={{ fontSize: '16px', color: '#000' }}>Upload to preview image link</span>
            )}
          </div>

          <div className="add_achievement_button_row">
            <button type="submit" className="add_achievement_submit_btn">Add</button>

            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="add_achievement_upload_btn"
            >
              Upload Image
            </button>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

          {uploading && <p className="add_achievement_uploading">Uploading image...</p>}
        </div>
      </form>
    </div>
    </>
  );
};

export default AddAchievement;
