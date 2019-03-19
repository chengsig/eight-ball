import React from 'react';
import { mount } from 'enzyme';
import EightBall from './EightBall';


it('it renders without crashing', function () {
    mount(<EightBall />);
});

it('it renders with initial msg of "Think of a Question"', function () {
    let wrapper = mount(<EightBall />);

    expect(wrapper.state().msg).toEqual("Think of a Question");
});

it('it renders the updated states correctly"', function () {
    let wrapper = mount(<EightBall />);

    wrapper.setState({msg: "Test"});
    expect(wrapper.state().msg).toEqual("Test");
});