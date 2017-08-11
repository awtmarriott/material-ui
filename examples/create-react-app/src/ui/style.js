import {
    withStyles,
    createStyleSheet,
} from 'material-ui/styles'

export { default as createPalette } from 'material-ui/styles/palette'

/*
MUI styleSheets currently involve this syntax:

const styleSheet = createStyleSheet( theme => ({
    ...
}))

But you always end up using createStyleSheet in your client code.

`injectSheet` just hides this away, and also makes the API compatible with
the JSS api ( https://github.com/cssinjs/react-jss )

See: https://github.com/callemall/material-ui/issues/7636

*/
export
const injectSheet = ( styleSheet, component ) =>
    withStyles( createStyleSheet( styleSheet ))( component )
