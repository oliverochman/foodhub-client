import React from 'react';
import { getData } from './Modules/RequestRecipes';

class ListRecipes extends Component {
  state = {
    recipes: [],
    error_message:null
    }
    componentDidMount() {
      this.getRecipes()
    }

  async getRecipes() {
    let result = await getData()
    this.setState({
      recipes: result
    })
  }

  render() {
    let renderListRecipes
    const recipeData = this.state.recipes

    if (recipeData !== []) {
      renderListRecipes = (
        <div>
          {recipeData.map(recipes => {
            return <div key={recipe.id}>
            {recipe.title}
            {recipe.ingredients}
            {recipe.instructions}
          </div>
          })}
          </div>
        )
      } else {
        return(
          renderListRecipes = (
          <div>
            No recipes available.
          </div>
        )
      )
    }
    return(
      <> 
        {renderListRecipes}
      </>
    )
  }
}
export default ListRecipes;