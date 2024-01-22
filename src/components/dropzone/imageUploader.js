import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ imagefixed }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the accepted image file
    const file = acceptedFiles[0];
    setSelectedImage({
      file,
      preview: URL.createObjectURL(file),
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <>
      <div
        {...getRootProps()}
        className="image-input-container"
        style={{
          backgroundAttachment: imagefixed ? 'fixed' : 'scroll',
          backgroundImage: `url('${selectedImage ? selectedImage.preview : ''}')`,
        }}
      >
        <input {...getInputProps()} />
        {!selectedImage && (
          <p>Drag 'n' drop an image here, or click to select one</p>
        )}
      </div>
    </>
  );
};

const previewContainerStyle = {
  marginTop: '20px',
};

const previewImageStyle = {
  width: '100%',
  height: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginTop: '10px',
};

export default ImageUploader;
