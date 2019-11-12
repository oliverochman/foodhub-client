import React from 'react';
import { getData } from './Modules/RequestRecipes';

class ListRecipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }

  async getRecipes() {
    let result = await getData()
    this.setState({
      recipes: result.data.entries
    })
  }

  render() {
    const recipeData = this.state.recipes
    this.getRecipes()

    if (recipeData !== []) {
      recipeData.forEach(recipe => {
        return (
          <div key={recipe.id}>
            {recipe.data.title}
            {recipe.data.ingredients}
            {recipe.data.instructions}
          </div>
        )
      })
    }
    return(
      <div>
        No recipes available.
      </div>
    )
  }
}

export default ListRecipes;