'use client'

import { useState } from "react"

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className='absolute'>
      <button
        onClick={handleOpen}
      >
        TOPICS
      </button>
      {open ? (
        <ul className='absolute'>
          <li>
            AMAZON
          </li>
        </ul>
      ): null}
    </div>
  )
}