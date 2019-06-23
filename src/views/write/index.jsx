import React from "react";
import SimpleMDE from "simplemde";
import marked from "marked";
import highlight from "highlight.js";
import { withSnackbar } from "notistack";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";
import "simplemde/dist/simplemde.min.css";
import "highlight.js/styles/default.css";
import { MenuItem } from "@material-ui/core";
import AsyncButton from "@/components/base/AsyncButton";
import { tagOpts } from "@/constants";

@withSnackbar
export default class Write extends React.Component {
  constructor(props) {
    super(props);
    this.formChange = this.formChange.bind(this);
    this.state = {
      loading: false,
      formData: {
        title: "",
        tag: "",
        currency: ""
      }
    };
  }

  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById("edit-wrapper"),
      autofocus: true,
      autoDownloadFontAwesome: false,
      autosave: {
        enabled: true,
        uniqueId: "SimpleMDE",
        delay: 1000
      },
      blockStyles: {
        bold: "**",
        italic: "*",
        code: "```"
      },
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true // 需要highlight依赖
      },
      previewRender(plainText) {
        return marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight(code) {
            return highlight.highlightAuto(code).value;
          }
        });
      }
    });
  }

  formChange(event) {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  }

  submit() {
    const context = this.smde.value();
    if (!context) {
      this.props.enqueueSnackbar("请输入文章内容", {
        variant: "error"
      });
    }
  }

  render() {
    const { loading, formData } = this.state;

    return (
      <ValidatorForm onSubmit={this.submit}>
        <TextValidator
          autoFocus
          className="mb-4 w-50"
          label="标题"
          onChange={this.formChange}
          value={formData.username}
          name="title"
          validators={["required"]}
          errorMessages={["请填写文章标题"]}
        />
        <br />
        <SelectValidator
          className="mb-4 w-50"
          label="标签"
          onChange={this.formChange}
          validators={["required"]}
          errorMessages={["请选择文章标签"]}
          value={formData.tag}
          name="tag"
        >
          {tagOpts.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectValidator>
        <textarea id="edit-wrapper" style={{ height: 800 }} />
        <AsyncButton loading={loading} type="submit">
          提交
        </AsyncButton>
      </ValidatorForm>
    );
  }
}
