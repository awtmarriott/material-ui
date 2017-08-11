import React, { Component } from 'react';
import { injectSheet } from '../ui/style';
import { Button } from '../ui/controls/';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '../ui/controls/Dialog';
import Typography from '../ui/Typography';
import styleSheet from './App.jss'


class App extends Component {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props

    return (
      <div className={ classes.container }>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography type="display1" gutterBottom>
          Material-UI
        </Typography>
        <Typography type="subheading" gutterBottom>
          example project
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

export default injectSheet( styleSheet, App )
