import React from 'react';
import { shallow } from 'enzyme';
import ListRecipes from '../components/ListRecipes';

describe('<ListRecipes />', () => {
  it('display list of recipes', () => {
    const describedComponent = shallow(<ListRecipes />);
    describedComponent.setState({recipes: [{id: 1, title: "Quiche", ingredients: "Eggs", directions: "Stir the mixture"}]})
    const response = <h1>Quiche</h1>
    console.warn(describedComponent.html())
    expect(describedComponent.contains(response)).toEqual(true)
  })
})