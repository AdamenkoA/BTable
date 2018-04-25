import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

class BSTable extends Component {
    render() {
        if (this.props.data) {
            const obj = this.props.data;
            const data = [].concat(obj);
            return (
                <BootstrapTable data={data}>
                    <TableHeaderColumn dataField='color' isKey={true}>Color</TableHeaderColumn>
                    <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                </BootstrapTable>);
        } else {
            return (<p>?</p>);
        }
    }
}