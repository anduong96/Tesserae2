import React from 'react'
import { Button } from 'antd'
import { Column } from '../../../../../components/Columns'

const FontSettings = () => (
    <div className={'row'}>
        <Column size={3} ><Button type="dashed" shape="circle" >A</Button></Column>
        <Column size={3} ><Button type="dashed" shape="circle" >B</Button></Column>
        <Column size={3} ><Button type="dashed" shape="circle" >C</Button></Column>
        <Column size={3} ><Button type="dashed" shape="circle" >D</Button></Column>
    </div>
)

export default FontSettings
