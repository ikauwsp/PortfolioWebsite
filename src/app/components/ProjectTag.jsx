import React from 'react'

export const ProjectTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected
    ? 'text-white bg-gradient-to-br from-blue-500 via-teal-600 to-purple-500 border border-transparent'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white'


  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-l cursor-pointer`}
    onClick={ () => onClick(name)}>
        {name}
    </button>
  )
}
