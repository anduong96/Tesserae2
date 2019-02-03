import React from 'react'
import { Slider } from 'antd'
import { FormWrapper } from '../../../../../components/Forms'

const SliderInput = ({
    label,
    max,
    min,
    defaultValue,
    onChange
}) => (
    <FormWrapper label={label || ''} labelStyle={{fontWeight: 100, padding: 0, margin: 0}}>
        <Slider defaultValue={defaultValue || 100} onAfterChange={onChange}/>
    </FormWrapper>
)

export default SliderInput
