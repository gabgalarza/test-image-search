import React from 'react'
import 'jsdom-global/register'
import {mount} from 'enzyme'
import { mockImages } from './mockData'
import Carousel from '../components/carousel'

describe('Carousel', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<Carousel images={mockImages}/>)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should render without throwing an error', () => {
    expect(wrapper.length > 0).toBe(true);
  })

  it('should render two arrows', () => {
    expect(wrapper.find('Arrow').length === 2).toBe(true);
  })

  it('should render main image', () => {
    expect(wrapper.find('Image').length === 1).toBe(true);
  })

  it('should show next image and prev images', () => {
    wrapper.find('[direction="right"]').simulate('click');
    expect(wrapper.find('Image').props().src).toEqual("//images.pexels.com/2");

    wrapper.find('[direction="left"]').simulate('click');
    expect(wrapper.find('Image').props().src).toEqual("//images.pexels.com/1");
  })

  it('should show and close lightbox', () => {
    wrapper.find('Image').simulate('click');
    expect(wrapper.find('.lightbox').exists()).toBe(true);

    wrapper.find('.close').simulate('click');
    expect(wrapper.find('.lightbox.image').exists()).toBe(false);
  })
})