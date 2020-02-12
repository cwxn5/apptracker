import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "antd";
import styled from "styled-components";
import { themes } from "../../styles/theme";

const SubmitButton = styled.button`
  color: ${themes.default.color1};
  background-color: ${themes.default.color5};
  width: 100%;
  height: 30px;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 4px;
  &:focus {
    outline: none;
  }
`;

class LinksForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <Input {...input} autoComplete="off" />
      </div>
    );
  };
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="linkedin" component={this.renderInput} label="LinkedIn" />
        <Field name="github" component={this.renderInput} label="Github" />
        <Field
          name="portfolio"
          component={this.renderInput}
          label="Portfolio"
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    );
  }
}

export default reduxForm({
  form: "settingsForm"
})(LinksForm);
