'use client'

import React, { useState } from 'react'
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { Button } from '@material-tailwind/react';
import dayjs from 'dayjs';
import { useFormik } from "formik";
import { deliveryAddress } from '@/schema';

export default function DeliveryForm() {
  const [date, setDate] = useState(new Date())
  const onSubmit = async (values, action) => {
    const timestamp = new Date(date);
    values.date = timestamp.toLocaleDateString()
    values.time = timestamp.toLocaleTimeString();
    // console.log('Form data:', values);
    // try {
    //   const response = await fetch('https://pitch-capable-tornado.glitch.me/majlis-form', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   if (response.ok) {
    //     // Form submitted successfully
    console.log('Form submitted successfully.', values);
    action.resetForm()
    //   } else {
    //     // Handle error
    //     console.error('Error submitting form.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, isSubmitting } = useFormik({
    initialValues: {
      firstName: '',
      phoneNumber: '',
      address: '',
      townOrCity: '',
      stateOrCountry: '',
      zipOrPostal: '',
      notesForDriver: '',
      date: '',
      time: '',
    },
    validationSchema: deliveryAddress,
    onSubmit,
  })
  return (
    <div>
      <p className='text-[14px] font-[600] leading-[22px] text-[#7E5CEB]'>Delivery address</p>
      <form autoCapitalize="off" className="grid grid-cols-1 gap-3 text-black" onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mt-[15px]        '>
        <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className='text-[12px] leading-[18px] font-[600] text-primary'>First Name</label>
            <input
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='First Name'
              id="firstName" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 ${errors.firstName && touched.firstName ? "border-[red]" : ""}`}
            />
            {errors.firstName && touched.firstName && <p className="text-[red]">{errors.firstName}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneNumber" className='text-[12px] leading-[18px] font-[600] text-primary'>Phone Number</label>
            <input
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Phone Number'
              id="phoneNumber" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 ${errors.phoneNumber && touched.phoneNumber ? "border-[red]" : ""}`}
            />
            {errors.phoneNumber && touched.phoneNumber && <p className="text-[red]">{errors.phoneNumber}</p>}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mt-[15px]'>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className='text-[12px] leading-[18px] font-[600] text-primary'>Address</label>
            <input
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Address'
              id="address" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 ${errors.address && touched.address ? "border-[red]" : ""}`}
            />
            {errors.address && touched.address && <p className="text-[red]">{errors.address}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="townOrCity" className='text-[12px] leading-[18px] font-[600] text-primary'>Town / City</label>
            <input
              value={values.townOrCity}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Town / City'
              id="townOrCity" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 ${errors.townOrCity && touched.townOrCity ? "border-[red]" : ""}`}
            />
            {errors.townOrCity && touched.townOrCity && <p className="text-[red]">{errors.townOrCity}</p>}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mt-[15px]'>
          <div className="flex flex-col gap-2">
            <label htmlFor="stateOrCountry" className='text-[12px] leading-[18px] font-[600] text-primary'>State / Country</label>
            <input
              value={values.stateOrCountry}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='State / Country'
              id="stateOrCountry" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 ${errors.stateOrCountry && touched.stateOrCountry ? "border-[red]" : ""}`}
            />
            {errors.stateOrCountry && touched.stateOrCountry && <p className="text-[red]">{errors.stateOrCountry}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="zipOrPostal" className='text-[12px] leading-[18px] font-[600] text-primary'>ZIP / Postal Code</label>
            <input
              value={values.zipOrPostal}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='ZIP / Postal Code'
              id="zipOrPostal" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 ${errors.zipOrPostal && touched.zipOrPostal ? "border-[red]" : ""}`}
            />
            {errors.zipOrPostal && touched.zipOrPostal && <p className="text-[red]">{errors.zipOrPostal}</p>}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mt-[15px]'>
          <div className="flex flex-col gap-2">
            <label htmlFor="notesForDriver" className='text-[12px] leading-[18px] font-[600] text-primary'>Notes for driver</label>
            <textarea
              value={values.notesForDriver}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Notes for driver'
              id="notesForDriver" type="text"
              className={`bg-inherit w-full text-black border-[1px] border-[#F2F2F2] rounded-[5px] p-3 ${errors.notesForDriver && touched.notesForDriver ? "border-[red]" : ""}`}
            />
            {errors.notesForDriver && touched.notesForDriver && <p className="text-[red]">{errors.notesForDriver}</p>}
          </div>
        </div>




        <p className='text-[14px] font-[600] leading-[22px] text-[#7E5CEB]'>Select Date and Time</p>
        <div className='mt-[15px] flex justify-around gap-[10px] md:gap-[25px]'>
          <DatePicker
            label='Pickup Date'
            className='rounded-[5px] border-[#F2F2F2] w-full'
            value={dayjs(date)}
            onChange={(newValue) => setDate(newValue)}
            minDate={dayjs(new Date())}
            format='D MMMM YYYY'
          />
          <TimePicker
            label="Pickup Time"
            className='w-full'
            value={dayjs(date)}
            onChange={(newValue) => setDate(newValue)}
          />
        </div>
        <div className='mt-[20px] w-full flex justify-end '>
          {/* <Button
          className='w-full md:max-w-[244px] bg-[#7E5CEB] rounded-[5px]'
        >Continue</Button> */}
          <Button type="submit" disabled={isSubmitting} className='w-full md:max-w-[244px] bg-[#7E5CEB] rounded-[5px]'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
