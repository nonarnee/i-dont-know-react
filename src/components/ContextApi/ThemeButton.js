import React, { useContext } from 'react';
import Button from './Button';
import ThemeContext from "./Context/ThemeContext";

function ThemeButton() {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <Button theme={theme} />
        </div>
    );
}

export default ThemeButton;
