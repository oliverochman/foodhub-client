import React, { Component } from "react"
import { withRouter } from "react-router"
import "../css/create-recipe.css"

class Cookbook extends Component {
  state = {
    message: null,
    error: false
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default withRouter(Cookbook)