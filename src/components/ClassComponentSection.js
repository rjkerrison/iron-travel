import React, { Component } from 'react'

class ClassComponentSection extends Component {
  constructor(props) {
    super({
      ...props,
      subtitle: 'HELLO',
    })
  }

  render() {
    return (
      <section>
        <h2>{this.props.sectionTitle}</h2>
        <p>{this.props.subtitle}</p>
      </section>
    )
  }
}

export default ClassComponentSection
