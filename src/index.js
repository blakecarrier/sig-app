import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SignaturePad from 'react-signature-canvas'

import styles from './styles.module.css'

class App extends Component {
    state = {trimmedDataURL: null}
    sigPad = {}
    clear = () => {
    this.sigPad.clear()
}

submitSignature = () => {
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
            .toDataURL('image/png')})
}
render () {
    let {trimmedDataURL} = this.state
    return <div className={styles.container}>
<div className={styles.sigContainer}>
<SignaturePad canvasProps={{className: styles.sigPad}}
    ref={(ref) => { this.sigPad = ref }} />
    </div>
    <div>
    <button className={`${styles.buttons} ${styles.clear}`} onClick={this.clear}>
        Clear
    </button>
    <button className={`${styles.buttons} ${styles.submit}`} onClick={this.submitSignature}>
        Submit
    </button>
    </div>
    {trimmedDataURL
        ? (<div className={styles.result}><img className={styles.sigImage}
        src={trimmedDataURL} />
        <textarea>{trimmedDataURL}</textarea></div>)
    : null}
</div>
}
}

ReactDOM.render(<App />, document.getElementById('root'))
