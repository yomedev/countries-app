import React from 'react'
import { HiChevronDown } from 'react-icons/hi'

interface ICustomToggleProps {
  children: JSX.Element,
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const CustomToggle = React.forwardRef((
  { children, onClick }: ICustomToggleProps,
  ref: React.Ref<HTMLAnchorElement>
) => (
  <a
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="shadow-sm rounded px-3 py-2 d-flex justify-content-center align-items-center gap-4 custom-toggle"
  >
    {children}
    <HiChevronDown className='custom-toggle-icon' size={15} />
  </a>
));

export default CustomToggle