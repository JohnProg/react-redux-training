import React, { PropTypes } from 'react';
import Button from './Button';
import Form from './Form';
import Input from './Input';
import Label from './Label';
import Select from './Select';

const AddTaskForm = ({ onSubmit, onInputChange, users, descriptionValue }) => {
  return (
    <Form onSubmit={ onSubmit }>
      <h3 className="border-bottom">Add a Task</h3>

      <Label key="name">User</Label>
      <Select onInputChange={ onInputChange} options={ users } />

      <Label key="description">Description</Label>
      <Input
        id="description"
        placeholder="Enter description..."
        value={ descriptionValue }
        onChange={ (val) => onInputChange('description', val) } />

      <Button status="success">Add</Button>
    </Form>
  );
};

AddTaskForm.propTypes = {
  onSubmit: PropTypes.func,
  onInputChange: PropTypes.func,
  users: PropTypes.array,
  descriptionValue: PropTypes.string,
};

AddTaskForm.defaultProps = {};

export default AddTaskForm;
