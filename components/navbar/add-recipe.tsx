import React from 'react'

import { IoMdAdd } from 'react-icons/io'

const AddRecipe = () => {
  return (
    <div className='flex items-center transition duration-200 cursor-pointer gap-x-2 hover:-translate-y-2'>
        <IoMdAdd className=' text-orange' size={30}  />
        ADD RECIPE
    </div>
  )
}

export default AddRecipe