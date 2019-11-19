import React, { Component } from "react"
import { withRouter } from "react-router"
import "../css/create-recipe.css"
import { submitFavorite } from '../modules/requestFavorites'

class Cookbook extends Component {
  state = {
    recipe: null,
    message: null,
    error: false, 
    renderFavorites: false,
  }

  async renderFavorites() {
    const result = this.recipe.favorite
    try {
      await saveData(result)
      this.props.entryHandler()
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    let favorite


    return (
      <div>
        {favorite}
      </div>
    )
  }
}
export default Cookbook