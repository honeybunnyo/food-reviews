'use client'

import React, { useState } from 'react'
import ContentDropdown from './ContentDropdown';
import InputField from './../components/InputField/InputField';
import PasswordField from './../components/InputField/PasswordField';
import RatingField from './../components/InputField/RatingField';
import TextAreaField from './../components/InputField/TextAreaField';
import ImageField from './../components/InputField/ImageField';

const page = () => {
  const [formData, setFormData] = useState({
    content: 'content type',
    title: '',
    description: '',
    recipe: '',
    method: '',
    entree: '',
    main: '',
    dessert: '',
    rating: 0,
  });
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formToSend = new FormData();
    formToSend.append('username', username);
    formToSend.append('password', password);
    Object.entries(formData).forEach(([key, value]) => {
      formToSend.append(key, value);
    });
    formData.append('imageUrl', imageFile)

    const res = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formToSend,
    });
    const data = await res.json();
    console.log(data);
  };

  const handleImageSelect = (file) => {
    setImageFile(file)
  };

  return (
    <form className="m-10" autoComplete="off" onSubmit={handleSubmit}>
      <ContentDropdown content={formData.content} setContent={handleChange('content')} />
      <InputField label="title" content={formData.title} setContent={handleChange('title')} />
      <TextAreaField label="description" content={formData.description} setContent={handleChange('description')} />

      {formData.content === 'recipes' && (
        <>
          <TextAreaField label="recipe" content={formData.recipe} setContent={handleChange('recipe')} />
          <TextAreaField label="method" content={formData.method} setContent={handleChange('method')} />
        </>
      )}

      {formData.content === 'restaurants' && (
        <>
          <TextAreaField label="entree" content={formData.entree} setContent={handleChange('entree')} />
          <TextAreaField label="main" content={formData.main} setContent={handleChange('main')} />
          <TextAreaField label="dessert" content={formData.dessert} setContent={handleChange('dessert')} />
        </>
      )}

      <RatingField rating={formData.rating} setRating={handleChange('rating')} />
      <label className="block text-sm font-medium mb-2">background image</label>
      <ImageField imageFile={imageFile} handleImageSelect={handleImageSelect}/>
      <PasswordField setUsername={setUsername} setPassword={setPassword}/>
      <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        Upload
      </button>
    </form>
  );
}

export default page