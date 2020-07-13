import React from 'react';
import { render } from '@testing-library/react';
import CardCarousel from './CardCarousel';
import tools from "../../data/tools";
import topics from "../../data/topics"

test('should render', () => {
    expect(render( < CardCarousel cardType={'tools'} /> )).toBeTruthy();
});