// src/components/Contact.js
import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact({ name, profileImage, isOnline }) {
  return (
    <div className="contact">
      <div className="profile-container">
        <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
        <span className={isOnline ? 'status status-online' : 'status status-offline'}></span>
      </div>
      <h2 className="name">{name}</h2>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Contact;