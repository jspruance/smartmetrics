import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class AppIdSelectField extends Component {

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
          floatingLabelText="Map ID"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={0} primaryText="Select a map" />
          <MenuItem value={"Map A"} primaryText="Map A" />
          <MenuItem value={"Map B"} primaryText="Map B" />
          <MenuItem value={"Map C"} primaryText="Map C" />
          <MenuItem value={"Map D"} primaryText="Map D" />
          <MenuItem value={"Map E"} primaryText="Map E" />
          <MenuItem value={"All"} primaryText="All" />
        </SelectField>
      </div>
    );
  }
}
