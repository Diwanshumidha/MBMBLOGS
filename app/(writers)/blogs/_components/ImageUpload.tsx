import { UploadImage } from '@/lib/UploadImage';
import React, { useState, ChangeEvent } from 'react';

const MAX_SIZE = 3145728

interface ImageUploadProps {
    base64Image: string | null;
    setBase64Image: React.Dispatch<React.SetStateAction<string | null>>;
  }
const ImageUpload = ({base64Image,setBase64Image}:ImageUploadProps) => {
  const [error,seterror] = useState('')
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    seterror('')

    if (file) {
      if (file.size <= MAX_SIZE) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result;
          if (result) {
            setBase64Image(result.toString());
            console.log(result.toString());
            
          }

        };
        reader.readAsDataURL(file);
      } else {
        console.log('File size exceeds 3MB.');
        seterror('File size exceeds 3MB.')
        setBase64Image(null); 
      }
    }
  };

  return (
    <div>
      <input
        title='Upload Images'
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      <p className=' text-red-600'>{error}</p>
      <div>
        {base64Image && (
          <div>
            <h2>Base64 Image:</h2>
            <img src={base64Image} alt="Base64" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
