import React from 'react';
import { mount } from 'enzyme';
import ListRecipes from '../components/ListRecipes';
import { MemoryRouter } from 'react-router'

describe('<ListRecipes />', () => {
  it('display list of recipes', () => {
    const describedComponent = mount(
      <MemoryRouter initialEntries={['/']}>
        <ListRecipes />
      </MemoryRouter>
    );
    describedComponent.find(ListRecipes).instance().setState({recipes: [{id: 1, title: "Quiche", ingredients: "Eggs", directions: "Stir the mixture"}]})
    describedComponent.update()
    const response = <h3 name="recipe-title" className="header" style={{ padding: '0.5rem' }}>Quiche</h3>
    expect(describedComponent.contains(response)).toEqual(true)
  })
})