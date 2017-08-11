import React, { Component } from 'react'
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'
import { injectSheet } from '../style'
import createContext from './context'

function withRoot( BaseComponent, theme, styleSheet ) {
    const AppWrapper = injectSheet( styleSheet, ( props ) => props.children )
    const context = createContext( theme )

    class WithRoot extends Component {
        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector( '#jss-server-side' )
            if ( jssStyles && jssStyles.parentNode ) {
                jssStyles.parentNode.removeChild( jssStyles )
            }
        }

        render() {
            return (
                <JssProvider registry={ context.sheetsRegistry } jss={ context.jss }>
                    <MuiThemeProvider theme={ context.theme } sheetsManager={ context.sheetsManager }>
                        <AppWrapper>
                            <BaseComponent />
                        </AppWrapper>
                    </MuiThemeProvider>
                </JssProvider>
            )
        }
    }

    WithRoot.displayName = `withRoot(${ BaseComponent.displayName })`

    return WithRoot
}

export default withRoot
