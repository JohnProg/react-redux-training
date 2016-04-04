import React, { PropTypes } from 'react';

import Card from '../components/Card';

const TasksList = ({ tasks }) => {
  return (
    <div className="px2 mt4">
      <h3>Tasks</h3>
      <Card content={ 'Learn React' } meta={ 'Alice Beeblebrox' } />
      {/* Complete implementation of TasksList to rended a list of cards for each task */}
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

TasksList.defaultProps = {};

export default TasksList;
