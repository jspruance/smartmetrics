import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  tablePropsCheckbox: {
    width: '250px',
    margin: '20px auto 0',
  }
};



export default class SearchResultsTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
      showTableProps: false,
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  handleTablePropsCheckbox = (event, checked) => {
    this.setState({showTableProps: checked});
  };

  render() {
	 if (this.props.results.length > 0) {
	    return (
	      <div>
	        <Table
	          height={this.state.height}
	          fixedHeader={this.state.fixedHeader}
	          fixedFooter={this.state.fixedFooter}
	          selectable={this.state.selectable}
	          multiSelectable={this.state.multiSelectable}
	        >
	          <TableHeader
	            displaySelectAll={this.state.showCheckboxes}
	            adjustForCheckbox={this.state.showCheckboxes}
	            enableSelectAll={this.state.enableSelectAll}
	          >
	            <TableRow>
	              <TableHeaderColumn colSpan="8" tooltip="Super Header" style={{textAlign: 'center'}}></TableHeaderColumn>
	            </TableRow>
	            <TableRow>
	              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Application ID">Application ID</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Map Name">Map Name</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Put">Put</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Set">Set</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Put if Absent">Put if Absent</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Get">Get</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
	            </TableRow>
	          </TableHeader>
	          <TableBody
	            displayRowCheckbox={this.state.showCheckboxes}
	            deselectOnClickaway={this.state.deselectOnClickaway}
	            showRowHover={this.state.showRowHover}
	            stripedRows={this.state.stripedRows}
	          >
	            {this.props.results.map( (row, index) => (
	              <TableRow key={index} selected={row.selected}>
	                <TableRowColumn>{index}</TableRowColumn>
	                <TableRowColumn>{row.applicationid}</TableRowColumn>
	                <TableRowColumn>{row.mapname}</TableRowColumn>
	                <TableRowColumn>{row.put}</TableRowColumn>
	                <TableRowColumn>{row.set}</TableRowColumn>
	                <TableRowColumn>{row.putifabsent}</TableRowColumn>
	                <TableRowColumn>{row.get}</TableRowColumn>
	                <TableRowColumn>{row.delete}</TableRowColumn>
	              </TableRow>
	              ))}
	          </TableBody>
	          <TableFooter
	            adjustForCheckbox={this.state.showCheckboxes}
	          >
	            <TableRow>
	              <TableRowColumn>ID</TableRowColumn>
	              <TableRowColumn>Application ID</TableRowColumn>
	              <TableRowColumn>Map Name</TableRowColumn>
	              <TableHeaderColumn tooltip="Put">Put</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Set">Set</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Put if Absent">Put if Absent</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Get">Get</TableHeaderColumn>
	              <TableHeaderColumn tooltip="Delete">Delete</TableHeaderColumn>
	            </TableRow>
	            <TableRow>
	              <TableRowColumn colSpan="8" style={{textAlign: 'center'}}></TableRowColumn>
	            </TableRow>
	          </TableFooter>
	        </Table>
	
	        <Checkbox
	          label="Show Table Properties"
	          style={styles.tablePropsCheckbox}
	          defaultChecked={false}
	          onCheck={this.handleTablePropsCheckbox}
	        />
	
	        {
	        this.state.showTableProps ?
	
	        <div style={styles.propContainer}>
	
	          <h3>Table Properties</h3>
	          <TextField
	            floatingLabelText="Table Body Height"
	            defaultValue={this.state.height}
	            onChange={this.handleChange}
	          />
	          <Toggle
	            name="fixedHeader"
	            label="Fixed Header"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.fixedHeader}
	          />
	          <Toggle
	            name="fixedFooter"
	            label="Fixed Footer"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.fixedFooter}
	          />
	          <Toggle
	            name="selectable"
	            label="Selectable"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.selectable}
	          />
	          <Toggle
	            name="multiSelectable"
	            label="Multi-Selectable"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.multiSelectable}
	          />
	          <Toggle
	            name="enableSelectAll"
	            label="Enable Select All"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.enableSelectAll}
	          />
	          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
	          <Toggle
	            name="deselectOnClickaway"
	            label="Deselect On Clickaway"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.deselectOnClickaway}
	          />
	          <Toggle
	            name="stripedRows"
	            label="Stripe Rows"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.stripedRows}
	          />
	          <Toggle
	            name="showRowHover"
	            label="Show Row Hover"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.showRowHover}
	          />
	          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
	          <Toggle
	            name="showCheckboxes"
	            label="Show Checkboxes"
	            onToggle={this.handleToggle}
	            defaultToggled={this.state.showCheckboxes}
	          />
	        </div> : null
	        }
	      </div>
	    );
	 }else {
	     return (<div id="no-results"></div>);
	 }
  }
}
