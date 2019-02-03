import React from 'react'
import { Input, Collapse } from 'antd'
import { FormWrapper } from './form'
import { CommonSettings } from './Common'

export const ImageSettings = ({
    name,
    id,
    config,
    onConfigChange
}) => (
    <div className={'image-settings'}>
        <FormWrapper label={'Source'}>
            <Input
                placeholder={'Image Address'}
                value={config.src}
                onChange={(event) => onConfigChange(id, { src: event.target.value })}
            />
        </FormWrapper>
        <Collapse bordered={false} defaultActiveKey={['style']}>
            <Collapse.Panel header='Additional Settings' key={'style'}>
                <CommonSettings {...{ name, id, config, onConfigChange }} yesPadding/>
            </Collapse.Panel>
        </Collapse>
    </div>
)
