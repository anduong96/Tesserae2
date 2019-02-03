import React from 'react'
import Header from './Header'
import Options from './Options'
import Canvas from './Canvas'
import Editor from './Editor'

import './Home.scss'

const Home = (props) => (
    <div className={'builder'}>
        <div className={'builder-header'}>
            <Header siteTitle={'Tesserae v2'}/>
        </div>
        <div className={'builder-wrapper'} >
            <Options />
            <Canvas {...props} />
            <Editor />
        </div>
    </div>
)

export default Home
