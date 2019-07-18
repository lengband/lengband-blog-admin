import React from "react";
import {
  Box,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Card,
  Grid,
  Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { regexp } from "@/lib/validateForm";
import AsyncButton from "@/components/base/AsyncButton";

const styles = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)", // 需要配置静态服务器
    // backgroundImage: "url(../../../../../static/images/blog-bg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    padding: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "-10% auto 0"
  },
  card: {
    padding: theme.spacing(4)
  },
  avatar: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    margin: "10px auto"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
});

const FORM_MODE = {
  login: {
    title: "登录",
    buttonText: "登录",
    pswLabel: "密码",
    formType: "login"
  },
  register: {
    title: "注册",
    buttonText: "注册",
    pswLabel: "密码",
    formType: "register"
  },
  forget: {
    title: "忘记密码",
    buttonText: "验证",
    pswLabel: "旧密码",
    formType: "forget"
  },
  reset: {
    title: "重置密码",
    buttonText: "登录",
    pswLabel: "新密码",
    formType: "reset"
  }
};

@withStyles(styles)
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      formMode: FORM_MODE.login,
      formData: {
        username: "",
        password: ""
      }
    };
    this.submit = this.submit.bind(this);
    this.formChange = this.formChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("username", value => {
      return regexp.username.reg.test(value);
    });
  }

  changeFormType(type) {
    this.setState({
      ...this.state,
      formMode: FORM_MODE[type || "login"]
    });
  }

  submit() {
    const { formType } = this.state.formMode;
    switch (formType) {
      case "register":
        this.goRegister();
        break;
      case "forget":
        this.goForget();
        break;
      case "reset":
        this.goReset();
        break;
      default:
        this.goLogin();
        break;
    }
  }

  goForget() {
    // 调取API验证，初步构想在以往的密码历史里找出匹配的一项
    // xxx
    setTimeout(() => {
      this.setState({
        ...this.state,
        formMode: FORM_MODE.reset
      });
    }, 1000);
  }

  goRegister() {
    this.register = true; // 暂时无用，躲避 eslint
  }

  goReset() {
    this.reset = true; // 暂时无用，躲避 eslint
  }

  goLogin() {
    this.setState({
      ...this.state,
      loading: true
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        loading: false
      });
      this.props.history.push("/dashboard");
    }, 3000);
  }

  formChange(event) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { formData, formMode, loading } = this.state;
    const { title, formType, buttonText, pswLabel } = formMode;
    const RememberBtn =
      formType === "login" ? (
        <FormControlLabel
          className="float-left w-100"
          control={<Checkbox value="remember" color="primary" />}
          label="记住我"
        />
      ) : null;
    const LoginControl =
      formType === "login" ? (
        <Grid container>
          <Grid item xs>
            <Link
              onClick={() => this.changeFormType("forget")}
              component="button"
            >
              忘记密码?
            </Link>
          </Grid>
          <Grid item>
            <Link
              onClick={() => this.changeFormType("register")}
              component="button"
            >
              还没有账号，去注册
            </Link>
          </Grid>
        </Grid>
      ) : null;
    return (
      <Box
        position="relative"
        className={`${classes.image} ${classes.root} d-flex`}
      >
        <Box position="absolute" top={10} right={10}>
          Lengband Blog
        </Box>
        <div className={`${classes.paper} justify-content-center`}>
          <Card className={classes.card}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className="text-center" component="h1" variant="h5">
              {title}
            </Typography>
            <ValidatorForm style={{ width: "100%" }} onSubmit={this.submit}>
              <TextValidator
                autoFocus
                margin="normal"
                label="用户名"
                fullWidth
                onChange={this.formChange}
                value={formData.username}
                name="username"
                validators={["required", "username"]}
                errorMessages={["请填写用户名", "用户名仅允许数字和字母的格式"]}
              />
              <br />
              <TextValidator
                margin="normal"
                label={pswLabel}
                fullWidth
                onChange={this.formChange}
                name="password"
                value={formData.password}
                validators={["required"]}
                errorMessages={["请填写密码"]}
                type="password"
              />
              <AsyncButton loading={loading} type="submit" fullWidth>
                {buttonText}
              </AsyncButton>
            </ValidatorForm>
            {RememberBtn}
            {LoginControl}
          </Card>
        </div>
      </Box>
    );
  }
}
