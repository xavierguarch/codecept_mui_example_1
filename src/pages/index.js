import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  renderSelect = props => {
    const { label, name, options } = props;

    const optionNodes = options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ));

    return (
      <div style={{ marginTop: `${20}px` }}>
        <TextField
          label={label}
          id={name}
          name={name}
          type="select"
          SelectProps={{
            native: true
          }}
          fullWidth
          displayEmpty
          select
        >
          {optionNodes}
        </TextField>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const genderOptions = [
      { label: "Select proper value", value: "" },
      { label: "Male", value: "MALE" },
      { label: "Female", value: "FEMALE" }
    ];

    const selectElement = this.renderSelect({
      label: "Gender",
      name: "gender",
      options: genderOptions
    });

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
            {selectElement}
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography variant="h4" gutterBottom>
          Material-UI
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          example project
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
        >
          Super Secret Password
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
