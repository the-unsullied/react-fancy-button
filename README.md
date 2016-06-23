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

**classes** {String}  string of classes on button element

**type** {String} type of button

**label** {String} content in button

**trigger** {Boolean} hides/shows spinner

**onClick** {String} action on click


## Tests:
To run the tests you can either run:
```
  npm test
```

OR

```
  npm test -- --debug=true // for debug mode in chrome
```
