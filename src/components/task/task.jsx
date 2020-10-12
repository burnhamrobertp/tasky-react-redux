import React from 'react'
import T from 'prop-types'
import { compose } from 'redux'

import TaskTitle from 'components/task/task-title/task-title'

class task extends React.PureComponent {
  static propTypes = {
    id: T.string.isRequired,
  }

  static defaultProps = {}

  render() {
    const { id } = this.props

    return (
      <div id={`task-${id}`}>
        <TaskTitle id={id} />
      </div>
    )
  }
}

// connected component below
const Task = compose(
)(task)

Task.displayName = 'Task'
Task.propTypes = {
  id: T.string.isRequired,
}

export default Task
