import React from 'react'
import { act } from 'react-dom/test-utils';
import 'jsdom-global/register'
import {mount} from 'enzyme'
import { mockImages } from './mockData'
import Search from '../components/search'

describe('Search', () => {
  let wrapper;
  
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ photos: mockImages }),
      })
    );

    jest.spyOn(React, 'useState').mockImplementation(stateValue => [stateValue, stateSetter])
    wrapper = mount(<Search/>)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should render without errors', () => {
    expect(wrapper.length > 0).toBe(true)
  })
})