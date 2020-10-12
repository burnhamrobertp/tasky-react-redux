import React from 'react';
import T from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import tasksSelector from 'store/tasks/selectors/tasks-selector'

import Task from 'components/task/task'

class tasksList extends React.PureComponent {
  static propTypes = {
    // from redux
    tasks: T.arrayOf(T.string).isRequired,
  };

  render() {
    const { tasks } = this.props;

    return tasks.map(id => <Task id={id} />);
  }
}

// connected component below
const mapStateToProps = (state, ownProps) => ({
  tasks: tasksSelector(state, ownProps),
});

const TasksList = compose(
  connect(mapStateToProps),
)(tasksList);

TasksList.displayName = 'TasksList';
TasksList.propTypes = {};

export default TasksList;
