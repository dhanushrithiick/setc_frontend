import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../stylesheets/EditAchievement.css';

const EditAchievement = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const { achievement } = state || {};

  const [formData, setFormData] = useState({
    name: achievement?.name || '',
    years: achievement?.years || '',
    imageUrl: achievement?.imageUrl || '',
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
      const response = await fetch(`https://setc-backend.onrender.com/${achievement._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Achievement updated successfully!');
        navigate('/achievementpanel');
      } else {
        alert('Failed to update achievement');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Something went wrong');
    }
  };

  if (!achievement) {
    return <p>No achievement data provided. Please go back and select one to edit.</p>;
  }

  return (
    <>

      <div className="edit_achievement_nav">
        <img
          src="./images/arrow_back.svg"
          className="edit_achievement_nav_back"
          onClick={() => navigate('/achievementpanel')}
          alt="Back"
        />
        <div className="add_achievement_nav_text">Edit Achievement</div>
      </div>

    <div className="edit_achievement_container">
      <form onSubmit={handleSubmit} className="edit_achievement_form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="edit_achievement_input"
          required
        />

        <label>Years:</label>
        <input
          type="text"
          name="years"
          value={formData.years}
          onChange={handleChange}
          className="edit_achievement_input"
          required
        />

        <label>Image:</label>
        <div className="edit_achievement_image_section">
          {formData.imageUrl && (
            <div className="edit_achievement_image_preview">
              <a href={formData.imageUrl} target="_blank" rel="noopener noreferrer">
                View image link
              </a>
            </div>
          )}

          <div className="edit_achievement_button_row">
            <button type="submit" className="edit_achievement_submit_btn">Update</button>

            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="edit_achievement_upload_btn"
            >
              Change Image
            </button>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

          {uploading && <p className="edit_achievement_uploading">Uploading image...</p>}
        </div>
      </form>
    </div>
    </>
  );
};

export default EditAchievement;
