import React from 'react'
import { Link } from "react-router-dom"

function Nav(props) {
  return (
    <nav className="main-nav">
      <ul>
        {Object.keys(props.topics).map(topic =>
          <li key={topic}>
            <Link to={`/topics/${topic}`}>
              {props.topics[topic]}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav