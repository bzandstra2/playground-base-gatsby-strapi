import React from 'react'
import Diamond from "../../images/diamond-divider.svg"
import { FaClock } from '@react-icons/all-files/fa/FaClock'
import { FaBusinessTime } from '@react-icons/all-files/fa/FaBusinessTime'
import { FaMoneyBillWave } from '@react-icons/all-files/fa/FaMoneyBillWave'
import { FaCheckDouble } from '@react-icons/all-files/fa/FaCheckDouble'
import { FaPeopleCarry } from '@react-icons/all-files/fa/FaPeopleCarry'
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt'



export default function Cards() {
  


return (
    
    
    <div className="mx-auto w-auto mt-20 flex flex-col flex-wrap md:flex-row justify-between align-center">
    <div className=" rounded overflow-hidden shadow-md shadow-primary-600 p-4 md:max-w-xs">
     <FaClock className="m-auto w-auto fill-primary-600"size="100" />
    <div className="px-6 py-4 mt-8">
      <div className="m-auto w-auto font-bold text-xl mb-2 text-center">Fastest Turnaround Time in the Industry</div>
    </div>
  </div>

  <div className="rounded overflow-hidden shadow-md shadow-primary-600 p-4 md:max-w-xs">
  <FaBusinessTime className="m-auto w-auto fill-primary-600"size="100"/>
    <div className="px-6 py-4 mt-8">
      <div className="m-auto w-auto font-bold text-xl mb-2 text-center">A+ Rating with the Better Business Bureau</div>
    </div>
  </div>

  <div className="rounded overflow-hidden shadow-md shadow-primary-600  p-4 md:max-w-xs">
  <FaMoneyBillWave className="m-auto w-auto fill-primary-600"size="100"/>
    <div className="px-6 py-4 mt-8">
      <div className="m-auto w-auto font-bold text-xl mb-2 text-center">25 Year Warranty Available</div>
    </div>
  </div>

  <div className="rounded overflow-hidden shadow-md shadow-primary-600  p-4 md:max-w-xs">
  <FaCheckDouble className="m-auto w-auto fill-primary-600"size="100"/>
    <div className="px-6 py-4 mt-8">
      <div className="m-auto w-auto font-bold text-xl mb-2 text-center">Over 25,000 Projects Completed</div>
    </div>
  </div>

  <div className="rounded overflow-hidden shadow-md shadow-primary-600  p-4 md:max-w-xs">
  <FaPeopleCarry className="m-auto w-auto fill-primary-600"size="100"/>
    <div className="px-6 py-4 mt-8">
      <div className="m-auto w-auto font-bold text-xl mb-2 text-center">Family Owned and Operated</div>
    </div>
  </div>

  <div className="rounded overflow-hidden shadow-md shadow-primary-600  p-4 md:max-w-xs">
  <FaMapMarkerAlt className="m-auto w-auto fill-primary-600"size="100"/>
    <div className="px-6 py-4 mt-8">
      <div className="m-auto w-auto font-bold text-xl mb-2 text-center">20 Locations Across North &#38; South Carolina</div>
    </div>
  </div>
  </div>

)
}
