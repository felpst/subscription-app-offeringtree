import React, { SelectHTMLAttributes } from "react"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

const Select: React.FC<SelectProps> = ({ label, id, children, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={id}
        className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

export default Select
