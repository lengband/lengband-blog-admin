import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  InputBase,
  Divider,
  Tooltip,
  IconButton,
  InputAdornment
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { observer, inject } from "mobx-react";
import { keyCode } from "@/constants";

const { ENTER_KEY_CODE } = keyCode;

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

@inject("todoStore")
@withStyles(styles)
@observer
export default class SearchTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
    this.searchClick = this.searchClick.bind(this);
    this.queryChange = this.queryChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.clear = this.clear.bind(this);
  }

  searchClick() {
    this.props.todoStore.search(this.state.searchQuery);
  }

  clear() {
    this.setState({
      ...this.state,
      searchQuery: ""
    });
    this.props.todoStore.clear();
  }

  queryChange(e) {
    const { value } = e.target;
    this.setState({
      ...this.state,
      searchQuery: value
    });
  }

  handleKeyUp(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.searchClick();
    }
  }

  render() {
    const { classes } = this.props;
    const { searchQuery } = this.state;

    return (
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="快速搜索"
          inputProps={{ "aria-label": "快速搜索" }}
          value={searchQuery}
          onChange={this.queryChange}
          onKeyUp={this.handleKeyUp}
          endAdornment={
            searchQuery ? (
              <InputAdornment position="start">
                <IconButton
                  size="small"
                  aria-label="Toggle password visibility"
                  onClick={this.clear}
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ) : null
          }
        />
        <IconButton
          className={classes.iconButton}
          aria-label="Search"
          onClick={this.searchClick}
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} />
        <Tooltip title="高级配置">
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="Directions"
          >
            <ExpandMore />
          </IconButton>
        </Tooltip>
      </Paper>
    );
  }
}
