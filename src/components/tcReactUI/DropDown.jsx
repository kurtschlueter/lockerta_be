import React, { Component, PropTypes } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginLeft: 0,
    width: '100%'
  },
  label: {
    minWidth: 140
  },
  inputContainer: {
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'transparent',
    color: '#0D2832',
    fontSize: 14,
    fontWeight: 400,
    width: '100%'
  }
};

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  optionSelected(key) {
    this.setState({
      open: false
    });
    this.props.onChange(key);
  }

  render() {
    let options;
    if (this.state.open) {
      options = (
        <div className="popUpBox popUpBoxType">
          <ul>
            {this.props.options.map(option =>
              <li onClick={() => this.optionSelected(option.key)}>{option.text}</li>
            )}
          </ul>
        </div>
      );
    }

    let input;
    if (this.props.readOnly) {
      input = (
        <div style={styles.inputContainer}>
          <span style={styles.input}>{this.props.value}</span>
          {options}
        </div>
      );
    } else {
      input = (
        <div style={styles.inputContainer} className="addCursor" onClick={() => this.toggle()}>
          <span style={styles.input}>{this.props.value}</span>
          {options}
          <i className="fa fa-caret-down" aria-hidden="true" />
        </div>
      );
    }

    return (
      <div style={styles.container}>
        <span style={styles.label}>{this.props.title}</span>
        {input}
      </div>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  options: PropTypes.array
};

export default TextInput;
