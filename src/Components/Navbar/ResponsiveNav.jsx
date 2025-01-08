import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';

const ResponsiveNav = ({isOpen}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className=" top-20 left-0 w-full h-screen z-20 lg:hidden "
        >
          <div className=" bg-slate-400 py-10 text-white rounded-xl mx-6">
            <ul className="flex flex-col justify-between items-center gap-6 ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/singlepost">Single Post</NavLink>
              </li>
              <li>
                <NavLink to="/pages">Pages</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveNav
