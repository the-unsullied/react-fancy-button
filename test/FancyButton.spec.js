import React from 'react';
import { findDOMNode } from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import FancyButton from './../dist/FancyButton';

const noop = () => {};

const createComponent = function(props = {}) {

  const state = Object.assign({
    type: 'submit',
    classes: '',
    disabled: false,
    onClick: noop,
    trigger: false,
    label: 'Submit'
  }, props);

  const Parent = React.createFactory(class extends React.Component {
    state = state;
    render() { return <FancyButton {...this.state} /> }
  });

  const parentComponent = ReactTestUtils.renderIntoDocument(Parent());
  const component = ReactTestUtils.findRenderedComponentWithType(parentComponent, FancyButton);

  return component;
};

context('FancyButton', () => {
  describe('initial load', () => {
    it('should load', () => {
      const component = createComponent();
      expect(component.refs.fancyButton).to.exist;
    });
  });

  describe('user actions', () => {
    it('should call onClick handler when clicked', () => {
      const onClick = sinon.spy();
      const component = createComponent({ onClick });
      ReactTestUtils.Simulate.click(component.refs.fancyButton);
      expect(onClick.calledOnce).to.be.true;
    });

    it('should have disabled attr when disabled and have disabled button shim', () => {
      const component = createComponent({ disabled: true });
      const button = findDOMNode(component.refs.fancyButton);
      const wrapper = findDOMNode(component.refs.fancyButtonWrapper);
      expect(button.hasAttribute('disabled')).to.be.true;
      expect(wrapper.querySelector('.fancy-button__disabled')).to.exist;
    });

    it('should call onDisabledClick when disabled and user clicks', () => {
      const onDisabledClick = sinon.spy();
      const component = createComponent({ disabled: true, onDisabledClick });
      const button = component.refs.disabledButtonShim;
      ReactTestUtils.Simulate.click(button);
      expect(onDisabledClick.calledOnce).to.be.true;
    });
  });
});
