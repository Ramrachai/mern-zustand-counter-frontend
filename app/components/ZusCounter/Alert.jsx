import React from 'react'

const Alert = ({color, message}) => {
    return (
        <div className={`p-2 mb-4 text-sm text-${color}-500 rounded-lg bg-${color}-100`} role="alert">
            {message}
        </div>
    )
}

export default Alert