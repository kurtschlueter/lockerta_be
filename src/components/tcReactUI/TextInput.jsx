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
  input: {
    width: '100%'
  }
};

class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <span style={styles.label} className={this.props.titleClassName}>{this.props.title}</span>
        <input
          type={this.props.inputType ? this.props.inputType : 'text'}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          onChange={(sender) => this.props.onChange ? this.props.onChange(sender.target.value) : null}
          readOnly={this.props.readOnly}
          style={styles.input}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  inputType: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
};

export default TextInput;
