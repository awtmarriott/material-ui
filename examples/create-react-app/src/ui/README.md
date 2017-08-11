We are putting MUI behind its own module, so:

- It doesn't bleed into our source code.
- We can extend it in a reasoable place (like adding throttle to AutoComplete).
- We can rename or add components.

`mui` is concerned with integrating MUI
`controls` is where we export-import MUI controls (and where extension additions are)

Note that MUI uses [react-jss](https://github.com/cssinjs/react-jss). `injectSheet` from `./style.js` is our app's interface for this.
