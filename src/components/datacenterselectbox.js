import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class DataCenterSelectField extends Component {

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
          floatingLabelText="Select Data Center"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={"Alpharetta"} primaryText="Alpharetta" />
          <MenuItem value={"Allen"} primaryText="Allen" />
          <MenuItem value={"Bothell"} primaryText="Bothell" />
          <MenuItem value={"Dallas"} primaryText="Dallas" />
          <MenuItem value={"Fairfield"} primaryText="Fairfield" />
          <MenuItem value={"Windward"} primaryText="Windward" />
          <MenuItem value={"All"} primaryText="All" />
        </SelectField>
      </div>
    );
  }
}
