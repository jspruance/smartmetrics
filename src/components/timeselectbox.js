import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class TimeSelectField extends Component {

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
          floatingLabelText="Time"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={"1 hour"} primaryText="Last 1 hour" />
          <MenuItem value={"1 day"} primaryText="Last 1 day" />
          <MenuItem value={"1 week"} primaryText="Last 1 week" />
          <MenuItem value={"1 month"} primaryText="Last 1 month" />
          <MenuItem value={"All"} primaryText="All" />
        </SelectField>
      </div>
    );
  }
}
