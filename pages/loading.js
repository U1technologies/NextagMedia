import React from 'react'
import { Triangle } from 'react-loader-spinner'
import Loader from '@/components/Loader/Loader'
const Loading = ({width = '80'}) => {
  return (
    <>
      <div className=" flex justify-center h-50 mb-52 mt-20">
        <Loader />
      </div>
    </>
  )
}
export default Loading
