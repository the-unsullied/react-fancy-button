# react-fancy-button

*React component button with spinner.*

![Fancy Button Demo](https://github.com/the-unsullied/react-fancy-button/blob/demo/fancybuttondemo.gif)

```
  NOTE: v1.0.x has upgrade React to v16. If using older version React, please use latest previous version 0.2.21.
```

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

**onDisabledClick**    {Function} action on click of disabled button

**trigger**    {Boolean hides/shows spinner and disabled more subsequent clicks from happening unless allowMultiClick is true

**disabled** {Boolean}  disables button

**onClick** {String}   action on click

**role** {String}   aria role for button - defaults to 'button'

**ariaLabel** {String}   aria-label for button - defaults to what prop.label is set to

**allowMultiClick** {Boolean}   defaults to false. If true, it will allow onClick handler to be triggered even if the prop trigger is true

## Tests:
To run the tests you can either run:
```
  npm test
```

OR

```
  npm test -- --debug=true // for debug mode in chrome
```
