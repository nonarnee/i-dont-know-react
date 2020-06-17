import React from 'react';
import Toolbar from "../components/ContextApi/Toolbar";
import { ThemeProvider } from "../components/ContextApi/Context/ThemeContext";

function ContextApi() {
    return (
        <div>
        <ThemeProvider value="dark">
            <Toolbar />
        </ThemeProvider>
            <Toolbar />
        </div>
    );
}

export default ContextApi;
