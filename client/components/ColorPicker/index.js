import React from 'react'
import { ChromePicker as ColorMenu } from 'react-color'
import { Popover } from 'antd'

const ColorPicker = ({ color, onChange, children }) => (
    <Popover
        style={{ padding: 0 }}
        content={<ColorMenu color={color} onChangeComplete={onChange}/>}
        trigger={'click'}
        placement={'left'}
    >
        {children}
    </Popover>
)

export default ColorPicker
