import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';

// styles
import './ImageUpload.css';

export default function ImageUpload({ onImageTagChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    // You can implement the logic for uploading the image here
    if (file) {
      // Create a URL for the selected image
      setSelectedImage(selectedFile);
    }
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      // Make a POST request to your server to upload the image
    }
  };

  // Pass the image tag to the parent component
  if (selectedImage) {
    onImageTagChange(<img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '300px', marginTop: '10px' }} />);
  }

  return (
    <div>
      <div className="flex justify-center">
        {selectedFile ? (
          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '300px', marginTop: '10px' }} />
        ) : (
          <PhotoIcon className="mx-auto h-32 w-32 text-gray-300" aria-hidden="true" />
        )}
      </div>
      <label className="cp-btn-cyan cp-btn mt-4">
        Choose File
        <input id="file-input" type="file" onChange={handleFileChange} />
      </label>
      <p className="text-sm leading-5 text-gray-600 font-blender400">PNG, JPG, GIF up to 10MB</p>
      <br />
      <button onClick={handleUpload} className="cp-btn-yellow cp-btn">
        Upload
      </button>
    </div>
  );
}
