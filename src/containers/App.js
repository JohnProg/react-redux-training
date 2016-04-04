import React from 'react';
import { connect } from 'react-redux';

import TasksList from '../components/TasksList';
import AddTaskForm from '../components/AddTaskForm';

function mapStateToProps(state) {
  return {
    users: state.users.toJS(),
    tasks: state.tasks.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowModal: () => dispatch(showModal()),
    onHideModal: () => dispatch(hideModal()),
  };
}

const App = () => {
  return (
    <div className="container">
      <AddTaskForm />
      <TasksList />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
