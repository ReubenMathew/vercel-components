import React, {useState} from 'react'

function StatusDot(props){
    const [label, setLabel] = useState(props.label);
    const [color, setColor] = useState(props.color);

    return (
        <div className="px-3 h-6 rounded-full flex items-center content-center">
            <span className={`w-3 h-3 rounded-full mr-2 bg-${color}`}></span>
            {label}
        </div>
    );
   
}

export default StatusDot;