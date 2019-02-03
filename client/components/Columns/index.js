import React from 'react'

const Column = ({ children, size }) => (
    <div className={`col-sm-12 col-md-${size} col-lg-${size}`}>
        {children}
    </div>
)

export default Column
