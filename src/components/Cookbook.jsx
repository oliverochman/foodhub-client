import React, { Component } from "react"
import { fetchRecipes } from "../modules/requestRecipes"
import RecipeCard from "./RecipeCard"

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
    let renderCookbookList
    const favoritesData = this.state.recipes
    let message
    if (favoritesData.length > 0) {
      renderCookbookList = favoritesData.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} linked />
      })
    } else {
      message = (
        <Message style={{ color: "red" }}>
          <Header as="p" id="message" style={{ color: "#4C5966" }}>
            There are no recipes
          </Header>
        </Message>
      )
    }
    return (
      <>
        {message}
        {renderCookbookList && <Grid columns={3} id="list"><Grid.Row>{renderCookbookList}</Grid.Row></Grid>}
      </>
    )
  }
}
export default Cookbook