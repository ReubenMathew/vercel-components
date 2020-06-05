import React, {useState} from 'react'

function Button(props) {
    const [text, setText] = useState(props.text);
    const [type, setType] = useState(props.type);
    const [shadow, setShadow] = useState(props.shadow);
    
    const mappings = {
        'primary': ["black","white","white","black"],
        'secondary': ["white","accent5","white","black","accent2","black"],
        'success': ["success","white","white","success","success","success"],
        'error': ["error","white","white","error","error","error"],
        'warning': ["warning","white","white","warning","warning","warning"],
        'default': ["black","white"],
    };
    
    var shadowText = null;

    if (shadow == "true") {
        shadowText = 'shadow-lg transform hover:-translate-y-1'
    }

    const background = mappings[type][0] || mappings.default[0];
    const textColor = mappings[type][1] || mappings.default[1];
    const hover_primary = mappings[type][2] || mappings.default[0];
    const hover_secondary = mappings[type][3] || mappings.default[1];
    const border = mappings[type][4] || 'black';
    const hover_border = mappings[type][5] || border;

    const mod = 'bg-'+background+' text-'+textColor + ' hover:bg-'+hover_primary+' hover:text-'+hover_secondary +" border-"+border + " hover:border-"+hover_border
    return (
        <div>
            <button className={`font-medium py-2 px-16 border transition ease-in-out duration-200 rounded ${mod} ${shadowText}`} >
                {text}
            </button>
        </div>
    );
}

export default Button;