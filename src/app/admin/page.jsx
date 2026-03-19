'use client'

import React, { useEffect, useState } from 'react'
import ContentDropdown from './ContentDropdown';
import InputField from './../components/InputField/InputField';
import PasswordField from './../components/InputField/PasswordField';
import RatingField from './../components/InputField/RatingField';
import ImageField from './../components/InputField/ImageField';
import ErrorToast from './../components/Toast/ErrorToast';
import SuccessToast from './../components/Toast/SuccessToast';
import ListField from './ListField';

const initialFormState = {
  content: 'content type',
  title: '',
  description: '',
  recipe: [],
  method: [],
  entree: [],
  main: [],
  dessert: [],
  rating: 0,
  notes: '',
};
const initialImageState = {
  description: [],
  background: null,
  recipe: [],
  method: [],
  entree: [],
  main: [],
  dessert: [],
}

const Page = () => {
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    content: false,
    title: false,
    rating: false,
  })

  const [formData, setFormData] = useState(initialFormState);
  const [imagesByCategory, setImagesByCategory] = useState(initialImageState);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [successToast, setSuccessToast] = useState(false);
  const [failToast, setFailToast] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    console.log('formData', formData)
  }, [formData])

  const resetFormData = () => {
    setFormData(initialFormState)
    setImagesByCategory({
      description: [],
      background: null,
      recipe: [],
      method: [],
      entree: [],
      main: [],
      dessert: [],
    });
  }
  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateField()) {
      return
    }
    setUploading(true)
    const formToSend = new FormData();
    formToSend.append('username', username);
    formToSend.append('password', password);

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formToSend.append(key, JSON.stringify(value));
      } else {
        formToSend.append(key, value);
      }
    });

    Object.entries(imagesByCategory).forEach(([category, files]) => {
      files.forEach((file) => {
        formToSend.append(`${category}Images`, file);
      });
    });

    const res = await fetch('/api/actions/upload', {
      method: 'POST',
      body: formToSend,
    });
    if (res.ok) {
      setSuccessToast(true)
      setTimeout(() => setSuccessToast(false), 5000);

    } else {
      setFailToast(true)
      setTimeout(() => setFailToast(false), 5000);
    }
    setUploading(false);
    resetFormData();

  }

  const validateField = () => {
    const newErrors = {
      username: !username.trim(),
      password: !password.trim(),
      content: formData.content === 'content type',
      title: !formData.title.trim(),
      rating: formData.rating === 0,
      file: !imagesByCategory.background
    }

    setErrors(newErrors)
    const hasErrors = Object.values(newErrors).some(Boolean)
    if (hasErrors) return false
    return true
  }

  return (
    <div>
      <form className="m-10" autoComplete="off" onSubmit={ handleSubmit } noValidate>
        <ContentDropdown content={ formData.content } setContent={ handleChange('content') } hasError={ errors.content } />
        <InputField label="title" content={ formData.title } setContent={ handleChange('title') } hasError={ errors.title } />
        { formData.content === 'recipes' && (
          <>
            <ListField
              label="recipe"
              items={ formData.recipe }
              setItems={ (items) => setFormData(prev => ({ ...prev, recipe: items })) }
              imagesByCategory={ imagesByCategory } setImagesByCategory={ setImagesByCategory }
            />
            <ListField
              label="method"
              items={ formData.method }
              setItems={ (items) => setFormData(prev => ({ ...prev, method: items })) }
              imagesByCategory={ imagesByCategory } setImagesByCategory={ setImagesByCategory }
            />
          </>
        ) }

        { formData.content === 'restaurants' && (
          <>
            <ListField label="entree" items={ formData.entree } setItems={ (items) => setFormData(prev => ({ ...prev, entree: items })) } imagesByCategory={ imagesByCategory } setImagesByCategory={ setImagesByCategory } />
            <ListField label="main" items={ formData.main } setItems={ (items) => setFormData(prev => ({ ...prev, main: items })) } imagesByCategory={ imagesByCategory } setImagesByCategory={ setImagesByCategory } />
            <ListField label="dessert" items={ formData.dessert } setItems={ (items) => setFormData(prev => ({ ...prev, dessert: items })) } imagesByCategory={ imagesByCategory } setImagesByCategory={ setImagesByCategory } />
          </>
        ) }
        <InputField label="notes" content={ formData.notes } setContent={ handleChange('notes') } />

        <RatingField rating={ formData.rating } setRating={ handleChange('rating') } hasError={ errors.rating } />
        <label className="block text-sm font-medium mb-2">background image</label>
        <ImageField
          imageFiles={ imagesByCategory.background }
          setImagesByCategory={ setImagesByCategory }
          hasError={ errors.file }
          category='background'
        />

        <PasswordField setUsername={ setUsername } setPassword={ setPassword } hasUsernameError={ errors.username } hasPasswordError={ errors.password } />
        <button
          type="submit"
          disabled={ uploading }
          className={ `text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800'
            }` }
        >
          { uploading ? 'Uploading...' : 'Upload' }
        </button>
      </form>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        { successToast && (<SuccessToast setVisible={ setSuccessToast } />) }
        { failToast && (<ErrorToast setVisible={ setFailToast } />) }
      </div>
    </div>
  );
}

export default Page