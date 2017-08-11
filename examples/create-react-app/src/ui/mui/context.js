import { create } from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry } from 'react-jss'
import createMuiTheme from 'material-ui/styles/theme'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'

// Configure JSS
const jss = create( preset())
jss.options.createGenerateClassName = createGenerateClassName

export default function createContext( theme ) {
    return {
        jss,
        theme: createMuiTheme( theme ),
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new WeakMap(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
    }
}
