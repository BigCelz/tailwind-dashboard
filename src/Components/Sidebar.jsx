import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { FaInbox } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div className='my-2 mb-2'>
            <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
        </div>
        <hr />

        <ul className='mt-3 text-white font-bold'>
            <li className='hover:bg-blue-500 py-2 mb-2 rounded hover:shadow'>
                <a href="/" className='px-3' >
                 <FaHome className='w-6 h-6 mr-2 inline-block -mt-2' />
                 Home
                </a>
            </li>

            <li className='hover:bg-blue-500 py-2 mb-2 rounded hover:shadow'>
                <a href="/" className='px-3' >
                 <MdDashboard className='w-6 h-6 mr-2 inline-block -mt-2' />
                 Dashboard
                </a>
            </li>

            <li className='hover:bg-blue-500 py-2 mb-2 rounded hover:shadow'>
                <a href="/" className='px-3' >
                 <MdArticle className='w-6 h-6 -mt-2 mr-2 inline-block' />
                 Blog
                </a>
            </li>

            <li className='hover:bg-blue-500 py-2 mb-2 rounded hover:shadow'>
                <a href="/" className='px-3' >
                 <HiDocumentReport className='w-6 h-6 -mt-2 mr-2 inline-block' />
                 Report
                </a>
            </li>

            <li className='hover:bg-blue-500 py-2 mb-2 rounded hover:shadow'>
                <a href="/" className='px-3' >
                 <FaInbox className='w-6 h-6 -mt-2 mr-2 inline-block' />
                 Inbox
                </a>
            </li>

            <li className='hover:bg-blue-500 py-2 mb-2 rounded hover:shadow'>
                <a href="/" className='px-3' >
                 <IoIosSettings className='w-6 h-6 -mt-2 mr-2 inline-block' />
                 Settings
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar