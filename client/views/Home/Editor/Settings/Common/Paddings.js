import React from 'react'
import { Divider } from 'antd'
import NumberInput from '../Inputs/Number'
import Column from '../../../../../components/Columns'

const PaddingSettings = ({ style, onStyleChange }) => (
    <div className={'padding-settings row'}>
        <Divider orientation='left' style={dividerStyle}>Paddings</Divider>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Left'}
                defaultValue={style.paddingLeft}
                onChange={(paddingLeft) => onStyleChange({ ...style, paddingLeft })}
            />
        </Column>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Right'}
                defaultValue={style.paddingRight}
                onChange={(paddingRight) => onStyleChange({ ...style, paddingRight })}
            />
        </Column>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Top'}
                defaultValue={style.paddingTop}
                onChange={(paddingTop) => onStyleChange({ ...style, paddingTop })}
            />
        </Column>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Bottom'}
                defaultValue={style.paddingBottom}
                onChange={(paddingBottom) => onStyleChange({ ...style, paddingBottom })}
            />
        </Column>
    </div>
)

export default PaddingSettings
