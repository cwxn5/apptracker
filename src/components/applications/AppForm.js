import React from "react";
import { Field, reduxForm } from "redux-form";
import { DatePicker, Input, Checkbox } from "antd";
import "antd/dist/antd.css";
import Moment from "moment";
import styled from "styled-components";

import LocationAutoComplete from "./AppCard/LocationAutoComplete";
import ResumeAutoComplete from "./AppCard/ResumeAutoComplete";


const SubmitButton = styled.button`
  color: white;
  background-color: #1b1c1d;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
const TwoColumnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

class AppForm extends React.Component {
  renderDatePicker = ({ input, label }) => {
    if (!input.value) {
      this.props.change("date", Moment().format("MM/DD/YYYY"));
      input.value = Moment();
    }
    return (
      <div className="field">
        <label>{label}</label>
        <DatePicker
          onChange={date => input.onChange(Moment(date).format("MM/DD/YYYY"))}
          defaultValue={Moment(input.value, "MM/DD/YYYY")}
          format={"MM/DD/YYYY"}
          allowClear={false}
        />
      </div>
    );
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return " " + error;
    }
    return "";
  }
  renderFavorite = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    if (!input.value) {
      input.value = false;
    }
    return (
      <div className={className}>
        <label>{label}</label>
        <Checkbox
          style={{ paddingRight: "6px" }}
          checked={input.value}
          onChange={e => input.onChange(e.target.checked)}
        />
      </div>
    );
  };
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label + this.renderError(meta)}</label>
        <Input {...input} autoComplete="off" />
      </div>
    );
  };
  renderLocationInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>
          {label}
          {this.renderError(meta)}
        </label>

        <LocationAutoComplete input={input} />
      </div>
    );
  };
  renderResumeInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <ResumeAutoComplete input={input} />
        {this.renderError(meta)}
      </div>
    );
  };
  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="position" component={this.renderInput} label="Position" />
        <Field name="company" component={this.renderInput} label="Company" />
        <Field
          name="location"
          component={this.renderLocationInput}
          label="Location"
        />
        <TwoColumnDiv>
          <Field
            name="favorite"
            component={this.renderFavorite}
            label="Favorite"
          />
          <Field
            name="date"
            component={this.renderDatePicker}
            label="Date Applied"
          />
        </TwoColumnDiv>

        <Field
          name="url"
          component={this.renderInput}
          label="Job Posting URL"
        />
        <Field
          name="resume"
          component={this.renderResumeInput}
          label="Resume Used"
        />
        <Field name="notes" component={this.renderTextArea} label="Notes" />
        <SubmitButton>Submit</SubmitButton>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.position) {
    errors.position = "Required";
  }
  if (!formValues.company) {
    errors.company = "Required";
  }
  if (!formValues.location) {
    errors.location = "Required";
  }
  return errors;
};

export default reduxForm({
  form: "applicationForm",
  validate
})(AppForm);
