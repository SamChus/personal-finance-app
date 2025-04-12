import React from 'react'


const FormField = ({text, placeholder, className, name, error, valueAsNumber, register}) => {
  return (
    <>
      <input
        type={text}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className={className}
      />
        {error && <span className='text-red-500 text-sm'>{error.message}</span>}
    </>
  );
}

export default FormField