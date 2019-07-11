import React from "react";
import { Fab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { observer, inject } from "mobx-react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import AsyncButton from "@/components/base/AsyncButton";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  };
};

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="subtitle1">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

@inject("todoStore")
@withStyles(styles)
@observer
export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loading: false,
      formData: {
        title: "",
        content: ""
      }
    };
    this.addTask = this.addTask.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
    this.formChange = this.formChange.bind(this);
  }

  cancel() {
    this.setState({
      ...this.state,
      open: false
    });
  }

  confirm() {
    console.log("confirm");

    this.cancel();
  }

  formChange(event) {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  }

  addTask() {
    this.setState({
      ...this.state,
      open: true
    });
  }

  render() {
    const { classes } = this.props;
    const { open, loading, formData } = this.state;
    return (
      <div>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={this.addTask}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          classes={{ paper: true }}
          onClose={this.cancel}
          aria-labelledby="customized-dialog-title"
        >
          <DialogTitle id="customized-dialog-title" onClose={this.cancel}>
            创建Task
          </DialogTitle>
          <DialogContent dividers>
            <ValidatorForm style={{ width: "100%" }} onSubmit={this.confirm}>
              <TextValidator
                autoFocus
                margin="normal"
                label="标题"
                fullWidth
                onChange={this.formChange}
                value={formData.title}
                name="title"
                validators={["required"]}
                errorMessages={["请填写标题"]}
              />
              <TextValidator
                autoFocus
                margin="normal"
                label="内容"
                fullWidth
                onChange={this.formChange}
                value={formData.content}
                InputProps={{ rows: 3, type: "textarea" }}
                multiline
                name="content"
              />
              <DialogActions className="wp">
                <Button onClick={this.cancel}>取消</Button>
                <AsyncButton loading={loading} type="submit">
                  确定
                </AsyncButton>
              </DialogActions>
            </ValidatorForm>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
