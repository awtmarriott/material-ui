// @flow

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';
import { withUI } from '../ui';
import { createPalette } from '../ui/style';
import { purple, green } from '../ui/colors';

const styleSheet = ( theme ) => ({
    '@global': {
        html: {
            background: theme.palette.background.default,
            WebkitFontSmoothing: 'antialiased', // Antialiasing.
            MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        },
        body: {
            margin: 0,
        },
    },
})

const theme = {
    palette: createPalette({
        primary: purple,
        accent: green,
    }),
}

const Root = () => {
    return (
        <Router>
            <Route path="/" component={ App } />
        </Router>
    )
}

export default withUI( Root, theme, styleSheet )

