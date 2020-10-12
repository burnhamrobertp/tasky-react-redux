import React from 'react'
import T from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'

import makeTaskSelector from 'store/tasks/selectors/make-task-selector'

class taskTitle extends React.PureComponent {
  static propTypes = {
    // from redux
    title: T.string.isRequired,
  }

  static defaultProps = {}

  render() {
    const { title } = this.props

    return (
      <div>{title}</div>
    )
  }
}

// connected component below
const makeMapStateToProps = () => {
  const taskSelector = makeTaskSelector()
  return (state, ownProps) => ({
    title: taskSelector(state, ownProps).title,
  })
}

const TaskTitle = compose(
  connect(makeMapStateToProps),
)(taskTitle)

TaskTitle.displayName = 'TaskTitle'
TaskTitle.propTypes = {
  id: T.string.isRequired,
}

export default TaskTitle
