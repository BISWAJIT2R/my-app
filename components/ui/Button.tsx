import React from 'react'

const Button = ({title, icons, extraclass, onclick}: {
    title: string,
    icons: React.ReactNode,
    extraclass?: string,
    onclick?: () => void
}) => {
  return (
    
        // Button code
        <button className="button-swimmer" onClick={onclick}>
          <div className="flex-between gap-3">
            {title}
            <div className={`extraclass rotate`}>
              {icons}
            </div>
          </div>
        </button>
      
  )
}

export default Button