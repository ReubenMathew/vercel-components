import React, {useState} from 'react'


function Badge(props){
    const [text, setText] = useState(props.text);
    const [type, setType] = useState(props.type);

    const mappings = {
        'primary': ["black","white"],
        'secondary': ["white","black","black"],
        'success': ["success","white"],
        'error': ["error","white"],
        'warning': ["warning",'white'],
        'default': ["black"],
    };

    const background = mappings[type][0] || mappings.default[0];
    const textColor = mappings[type][1] || mappings.default[1];
    const border = mappings[type][2];
    
    const styling = 'bg-'+background+' text-'+textColor + " border-"+border;
    
    return (
        <span className={`rounded-full font-medium text-sm px-2 py-1/3 ${styling}`}>
            {text}
        </span>
    );

}

export default Badge;