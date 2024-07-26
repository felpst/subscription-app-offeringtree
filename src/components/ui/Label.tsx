import React, { LabelHTMLAttributes } from "react"

const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  ...props
}) => {
  return (
    <label className="block mb-1 text-sm font-medium text-gray-700" {...props}>
      {children}
    </label>
  )
}

export default Label
