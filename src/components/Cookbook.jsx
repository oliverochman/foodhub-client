import React, { Component } from "react"
import { withRouter } from "react-router"
import "../css/create-recipe.css"

class Cookbook extends Component {
  state = {
    recipes: []
  }

  componentDidMount() {
    fetchRecipes().then(result => {
      this.setState({
        recipes: result
      })
    })
  }

  render() {
    let favorite
    return (
      <div>
      </div>
    );
  }
}

export default withRouter(Cookbook)