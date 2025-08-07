import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../stylesheets/Updateexcom.css';

const UpdateExcom= () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const { member } = state || {};

  const [formData, setFormData] = useState({
    name: member?.name || '',
    post: member?.post || '',
    speaksAbout: member?.speaksAbout || '',
    enjoys: member?.enjoys || '',
    email: member?.email || '',
    image: member?.image || '',
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
        image: result.secure_url,
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
      const res = await fetch(`https://setc-backend.onrender.com/excom/${member._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Excom member updated successfully!');
        navigate('/excompanel');
      } else {
        alert('Failed to update Excom member');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('Something went wrong');
    }
  };

  if (!member) {
    return <p>No member data provided. Please go back and select one to edit.</p>;
  }

  return (
    <>
      <div className="edit_excom_nav">
        <img
          src="./images/arrow_back.svg"
          className="edit_excom_nav_back"
          onClick={() => navigate('/excompanel')}
          alt="Back"
        />
  <div className="edit_excom_nav_text">Update Member</div>
      </div>

    <div className="edit_excom_container_overall">
      <div className="edit_excom_container">

        <div className="edit_excom_container1">
          {formData.image && (
            <div className="edit_excom_image_preview">
              <img src={formData.image} alt="Excom" className="edit_excom_image" />
            </div>
          )}

        </div>

        <div className="edit_excom_container2">
          
        <form onSubmit={handleSubmit} className="edit_excom_form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="edit_excom_input"
            required
          />


          <label>Speaks About:</label>
          <input
            type="text"
            name="speaksAbout"
            value={formData.speaksAbout}
            onChange={handleChange}
            className="edit_excom_input"
          />

          <label>Enjoys:</label>
          <input
            type="text"
            name="enjoys"
            value={formData.enjoys}
            onChange={handleChange}
            className="edit_excom_input"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="edit_excom_input"
          />

            <div className="edit_excom_button_row">
              <button type="submit" className="edit_excom_submit_btn">Update</button>

              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="edit_excom_upload_btn"
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

            {uploading && <p className="edit_excom_uploading">Uploading image...</p>}
        </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default UpdateExcom;
