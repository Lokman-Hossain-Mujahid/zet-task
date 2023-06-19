"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

const PartnerDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className='w-[80vw] mx-auto mt-10 mb-10'>
        <div>
          <h2 className='text-4xl font-bold text-gray-700'>Provide your details</h2>
        </div>
        <div className='mt-14'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <label htmlFor='orgName' className='block text-lg   text-gray-700'>
                Organization name <sup className='text-red-500'>*</sup>
              </label>
              <input
                type='text'
                id='orgName'
                className='w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500'
                {...register('orgName', { required: 'Name is required' })}
              />
              {errors.orgName && (
                <p className='text-red-500'>{errors.orgName.message}</p>
              )}
            </div>
            <div className='mb-4 mt-10'>
              <label htmlFor='about' className='block text-lg   text-gray-700'>
                About <sup className='text-red-500'>*</sup>
              </label>
              <textarea
                placeholder='Enter your text here'
                id='about'
                className='w-full bg-slate-50 rounded-md px-4 py-10 focus:outline-none focus:ring focus:ring-black'
                {...register('about', { required: 'About is required' })}
              />
              {errors.about && (
                <p className='text-red-500'>{errors.about.message}</p>
              )}
            </div>
            <div className='grid md:grid-cols-2 gap-14 mt-14'>
              <div>
                <label htmlFor='contact' className='block text-lg   text-gray-700'>
                  Point of Contact <sup className='text-red-500'>*</sup>
                </label>
                <input
                  type='text'
                  id='contact'
                  className='w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500'
                  {...register('contact', { required: 'Point of Contact is required' })}
                />
                {errors.contact && (
                  <p className='text-red-500'>{errors.contact.message}</p>
                )}
              </div>
              <div>
                <label htmlFor='designation' className='block text-lg   text-gray-700'>
                  Designation <sup className='text-red-500'>*</sup>
                </label>
                <input
                  type='text'
                  id='designation'
                  className='w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500'
                  {...register('designation', { required: 'Designation is required' })}
                />
                {errors.designation && (
                  <p className='text-red-500'>{errors.designation.message}</p>
                )}
              </div>
              <div>
                <label htmlFor='phone' className='block text-lg   text-gray-700'>
                  Phone Number <sup className='text-red-500'>*</sup>
                </label>
                <input
                  type='text'
                  id='phone'
                  className='w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500'
                  {...register('phone', { required: 'Phone Number is required' })}
                />
                {errors.phone && (
                  <p className='text-red-500'>{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor='email' className='block text-lg   text-gray-700'>
                  Email <sup className='text-red-500'>*</sup>
                </label>
                <input
                  type='text'
                  id='email'
                  className='w-full border-gray-300 border rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500'
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <p className='text-red-500'>{errors.email.message}</p>
                )}
              </div>
            </div>

          </form>
        </div>
      </div>
      <hr className='w-[99vw]' />
      <div className='flex justify-center mb-10'>
        <button
          type='submit'
          className='mt-6 bg-blue-500 text-white rounded-md px-10 py-2 hover:bg-blue-600'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PartnerDetails;

