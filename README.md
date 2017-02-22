# react-fancy-button

*React component button with spinner.*

![Fancy Button Demo](https://github.com/the-unsullied/react-fancy-button/blob/demo/fancybuttondemo.gif)


## Install
```
npm install react-fancy-button --save
```

## Usage
```
  import FancyButton from 'react-fancy-button';

  React.createClass({

  save() {
    this.setState({isSavingNote: true});
    console.log('saving!')
  },

  isFormValid() {
    return someValidations();
  },

  render() {
    <FancyButton classes='btn btn--small btn-primary btn--full'
       onClick={this.save}
       disabled={isFormValid()}
       trigger={this.state.isSavingNote}
       onDisabledClick={ () => this.setState({ showErrors: true }) }
       label='Save'/>
  }
```


## Params

**classes** {String}   string of classes on button element

**type** {String}   type of button

**label** {Any}  content in button

**onDisabledClick** {Function}    action on click of disabled button

**trigger** {Boolean  hides/shows spinner

**disabled** {Boolean}  disables button

**onClick** {String}   action on click

**role** {String}   aria role for button - defaults to 'button'

**ariaLabel** {String}   aria-label for button - defaults to what prop.label is set to

## Tests:
To run the tests you can either run:
```
  npm test
```

OR

```
  npm test -- --debug=true // for debug mode in chrome
```
