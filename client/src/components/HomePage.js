import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class HomePage extends Component {
  render() {
    return (
      <div>

        <div>
          <Link to='/login'>Login Link</Link>
        </div>

        HomePage

      </div>
    )
  }
}

export default HomePage