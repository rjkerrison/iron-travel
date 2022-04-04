import { Component } from 'react'

class ClassComponentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitle:
        this.props.subtitle ||
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum repellat aliquam ipsa consequuntur voluptatem beatae explicabo nobis. Labore numquam ducimus delectus. Maiores illo nam qui nesciunt odio eos neque?',
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
