import React from "react";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import Moment from "moment";

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
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
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
        <Field name="location" component={this.renderInput} label="Location" />
        <Field
          name="date"
          component={this.renderDatePicker}
          label="Date Applied"
        />
        <Field
          name="url"
          component={this.renderInput}
          label="Job Posting URL"
        />
        <Field name="resume" component={this.renderInput} label="Resume Used" />
        <Field name="notes" component={this.renderTextArea} label="Notes" />
        <button className="ui black button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.position) {
    errors.position = "You must enter a position";
  }
  if (!formValues.company) {
    errors.company = "You must enter a company";
  }
  if (!formValues.location) {
    errors.location = "You must enter a location";
  }
  return errors;
};

export default reduxForm({
  form: "applicationForm",
  validate
})(AppForm);
