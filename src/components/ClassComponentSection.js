import React, { Component } from 'react'

class ClassComponentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitle: 'Hello',
    }
  }

  render() {
    return (
      <section>
        <h2>{this.props.sectionTitle}</h2>
        <p>{this.state.subtitle}</p>
      </section>
    )
  }
}

export default ClassComponentSection
