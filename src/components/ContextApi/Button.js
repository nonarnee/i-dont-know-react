import React from 'react';

function Button({theme}) {
    const bgTheme = pTheme => pTheme==='light' ? '#0052a1' : '#e3e3e3';
    console.log(theme);
    return (
        <button style={{width:'400px',height:'120px',backgroundColor:bgTheme(theme)}}>{theme}</button>
    );
}

export default Button;
