import React from 'react';
import { Form, Field } from 'react-final-form';

const StreamForm = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, placeholder, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={placeholder} autoComplete='off' />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
      errors.title = 'You must enter a title!';
    }

    if (!formValues.description) {
      errors.description = 'You must enter a description!';
    }

    return errors;
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={validate}
      className='ui form error'
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className='ui form error'>
          <Field
            name='title'
            component={renderInput}
            label='Enter Title'
            placeholder='ex. Coding Stream'
          />
          <Field
            name='description'
            component={renderInput}
            label='Enter Description'
            placeholder='ex. Stream about coding.'
          />
          <button className='ui button primary'>{props.buttonText}</button>
        </form>
      )}
    ></Form>
  );
};

export default StreamForm;
