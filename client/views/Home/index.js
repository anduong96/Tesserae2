import React, { Component } from 'react'

class Home extends Component {
    state = {  }

    render() {
        return (
            <div className={'builder'}>
                <div className={'builder-header'}>
                    <Header siteTitle={'Tesserae v4'}/>
                </div>
                <div className={'builder-wrapper'} >
                    <Options />
                    <Canvas {...props} />
                    <Editor />
                </div>
            </div>
        )
    }
}

export default Home
