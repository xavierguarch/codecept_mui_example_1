import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
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
    gender: "",
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
    const {
      input,
      label,
      meta: { touched, error },
      options,
      ...custom
    } = props;

    const optionNodes = options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ));

    return (
      <div style={{ marginTop: `${20}px` }}>
        <Select
          children={optionNodes}
          id={input.name}
          label={label}
          name={input.name}
          native={true}
          {...custom}
        />
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

    const selectElement = props =>
      this.renderSelect({
        ...props,
        label: "Gender",
        name: "gender",
        options: genderOptions
      });

    return (
      <div className={classes.root}>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <form autoComplete="off" onSubmit={this.props.handleSubmit}>
              <DialogContentText>1-2-3-4-5</DialogContentText>
              <Field
                name="gender"
                component={selectElement}
                label="gender"
                options={genderOptions}
                type="select"
                validate={[]}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" type="submit" onClick={this.handleClose}>
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

const mapStateToProps = state => {
  return {};
};

// eslint-disable-next-line require-jsdoc
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "myForm", // A unique identifier for this form
    enableReinitialize: true
  })(withRoot(withStyles(styles)(Index)))
);
