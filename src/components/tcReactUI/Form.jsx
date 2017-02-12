import React, { Component, PropTypes } from 'react';
import TextInput from './TextInput.jsx';
import DropDown from './DropDown.jsx';

const styles = {
  container: {}
};

class Form extends Component {
  constructor(props) {
    super(props);
  }

  renderElement(element) {
    const value = this.props.values.find(e => e.id === element.id);
    if (element.type === 'TextInput') {
      return (
        <TextInput
          id={element.id}
          name={element.name}
          inputType={element.inputType}
          title={element.title}
          titleClassName={element.titleClassName}
          value={value ? value.value : undefined}
          onChange={value ? value.onChange : undefined}
          readOnly={value ? value.readOnly : undefined}
        />
      );
    }
    if (element.type === 'DropDown') {
      return (
        <DropDown
          id={element.id}
          title={element.title}
          value={value ? value.value : undefined}
          onChange={value ? value.onChange : undefined}
          readOnly={value ? value.readOnly : undefined}
          options={value ? value.options : undefined}
        />
      );
    }
  }

  render() {
    return (
      <div className="form-info-tab" style={styles.container}>
        <div className="col-lg-6-info-tab">
        {this.props.elements
        .filter((element, index) => index % 2 === 0)
        .map((element) => {
          return (
            <form>
              {this.renderElement(element)}
            </form>
          );
        })}
        </div>
        <div className="col-lg-6-info-tab">
        {this.props.elements
        .filter((element, index) => index % 2 !== 0)
        .map((element) => {
          return (
            <form>
              {this.renderElement(element)}
            </form>
          );
        })}
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  elements: PropTypes.array,
  values: PropTypes.array
};

export default Form;
