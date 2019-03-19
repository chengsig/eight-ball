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

it('it renders the updated states correctly"', function () {
    let wrapper = mount(<EightBall />);

    wrapper.simulate("click");
    expect(wrapper.state().msg).not.toEqual("Think of a Question");
});

it('it renders the updated states correctly"', function () {
    let wrapper = mount(<EightBall answers={[{ msg: "It is certain.", color: "green" }]}/>);

    wrapper.simulate("click");
    expect(wrapper.state().msg === "It is certain.").toEqual(true);
    expect(wrapper.state().color === "green").toEqual(true);
});