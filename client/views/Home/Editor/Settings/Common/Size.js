import React from 'react'
import { Divider } from 'antd'
import SliderInput from '../Inputs/Slider'
import Column from '../../../../../components/Columns'

const SizeSettings = ({ style, onStyleChange }) => (
    <div className={'size-settings row'}>
        <Divider orientation='left' style={dividerStyle}>Sizes</Divider>
        <Column size={6}>
            <SliderInput
                label={'Width'} d
                efaultValue={style.width}
                onStyleChange={(value) => onStyleChange({ ...style, width: `${value}%` })}
            />
        </Column>
        <Column size={6}>
            <SliderInput
                label={'Height'}
                defaultValue={style.height}
                onStyleChange={(value) => onStyleChange({ ...style, width: `${value}%` })}
            />
        </Column>
    </div>
)

export default SizeSettings
