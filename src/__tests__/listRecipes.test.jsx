import React from 'react';
import { shallow } from 'enzyme';
import ListRecipes from '../components/ListRecipes';

describe('<ListRecipes />', () => {
  it('display list of recipes', () => {
    const describedComponent = shallow(<ListRecipes title="Quiche" ingredients="Eggs" instructions="Stir the mixture" />);
    const response = <p>Quiche</p>
    expect(describedComponent.contains(response)).toEqual(true)
  })
})