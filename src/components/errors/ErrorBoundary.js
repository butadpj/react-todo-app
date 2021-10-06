import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  

  componentDidCatch(err, info) {
    // Create some fallback UI here
    this.setState({hasError: true})

    // Log error to error service here
  }

  render() {
    if (this.state.hasError) {
      return <h2>There's an Error occured in {this.props.componentName}</h2>
    }
    return this.props.children
  }
}

export default ErrorBoundary