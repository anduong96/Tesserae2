import React from 'react'
import { Button } from 'antd'
import Divider from '../../../../../components/Divider'
import Column from '../../../../../components/Columns'
import ColorPicker from '../../../../../components/ColorPicker'

const BackgroundSettings = ({ style, onStyleChange }) => (
    <div className={'background-settings row'}>
        <Divider orientation='left' style={dividerStyle}>Background Color</Divider>
        <Column size={12}>
            <ColorPicker
                onChange={(color) => onStyleChange({ ...style, backgroundColor: color.hex })}
                color={style.backgroundColor || 'white'}
            >
                <Button style={{ backgroundColor: style.backgroundColor || 'white', ...ColorButtonSettings }} />
            </ColorPicker>
        </Column>
    </div>
)

export default BackgroundSettings
