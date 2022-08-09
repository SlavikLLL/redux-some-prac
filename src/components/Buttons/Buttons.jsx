import React from 'react'
import "./Buttons.css"

const Buttons = (props) => {
    return(
    <div className='buttons'>
  {(props.status === 0)?

    <button className='startButton' onClick={props.start}>Start</button>
    :""
}
{(props.status === 1)?
<div>
<button className='stopButton' onClick={props.stop}>Stop</button>
<button className='resetButton' onClick={props.reset}>Reset</button>
</div>
:""
}
{(props.status === 2)?
<div>
<button className='resumeButton' onClick={props.resume}>Resume</button>
<button className='resetButton' onClick={props.reset}>Reset</button>
</div>
:""
}
</div>

    )
}

export default Buttons