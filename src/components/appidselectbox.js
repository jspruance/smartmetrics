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
          floatingLabelText="App ID"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={0} primaryText="Select an app ID" />
          <MenuItem value={"dataLayerAppId"} primaryText="dataLayerAppId" />
          <MenuItem value={"serviceLayerAppId"} primaryText="serviceLayerAppId" />
          <MenuItem value={"AppId C"} primaryText="AppId C" />
          <MenuItem value={"AppId D"} primaryText="AppId D" />
          <MenuItem value={"AppId E"} primaryText="AppId E" />
          <MenuItem value={"All"} primaryText="All" />
        </SelectField>
      </div>
    );
  }
}
