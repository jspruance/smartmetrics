import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class SchemaSelectField extends Component {

  state = {
    value: 1,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
    this.props.updateSearchQuery(event, index, value);
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Schema"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={0} primaryText="Select a schema" />
          <MenuItem value={"Schema A"} primaryText="Schema A" />
          <MenuItem value={"Schema B"} primaryText="Schema B" />
          <MenuItem value={"Schema C"} primaryText="Schema C" />
          <MenuItem value={"Schema D"} primaryText="Schema D" />
          <MenuItem value={"Schema E"} primaryText="Schema E" />
        </SelectField>
      </div>
    );
  }
}
