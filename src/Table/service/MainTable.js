import React, {Component} from 'react';
import {GetCustomFilter} from './CheckboxFilter';
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import Info from '../data/AddInfo';
import {enumFormatter} from '../helper/handle'
import {idValidator, priceValidator, nameValidator} from '../helper/validator'
import {remote} from '../helper/remote'

function handlerClickCleanFiltered() {
    this.refs.Name.cleanFiltered();
    this.refs.Type.cleanFiltered();
}

class MainTable extends Component {
    getSelectedRowKeys() {
        console.log(this.refs.table.state.selectedRowKeys)
    };

    render() {
        const cellEditProp = {
            mode: 'click',
            blurToSave: true
        };

        const data = this.props.data;
        return (
            <div className="react-bs-table-update">
                <div className="react-bs-table-container">
                    <BootstrapTable
                        data={data}
                        selectRow={Info.selectRowProp}
                        ref='table'
                        dataAlign='center'
                        remote={remote}
                        cellEdit={cellEditProp}
                        options={{
                            onCellEdit: this.props.onCellEdit,
                            onDeleteRow: this.props.onDeleteRow,
                            onAddRow: this.props.onAddRow,
                            insertModalHeader: this.createCustomModalHeader,
                            clearSearch: true
                        }}
                        insertRow deleteRow search
                        striped hover condensed pagination
                    >
                        <TableHeaderColumn
                            dataField="number"
                            width='60'
                            dataAlign='center'
                            isKey dataSort
                            editable={{validator: idValidator}}
                        >#</TableHeaderColumn>
                        <TableHeaderColumn
                            width='90'
                            dataAlign='left'
                            ref='Name'
                            dataField="name"
                            editable={{validator: nameValidator}}
                            dataSort
                        >Name</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="price"
                            width='100'
                            dataAlign='center'
                            editable={{validator: priceValidator}}
                        >Price</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="country"
                            width='200'
                        >Country</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='jobType'
                            dataSort
                            width='100'
                            editable={{type: 'select', options: {values: Info.jobType}}}
                        >Job Type</TableHeaderColumn>
                        <TableHeaderColumn
                            ref='Type'
                            dataField="qualityType" dataFormat={enumFormatter} formatExtraData={Info.qualityType}
                            width='105'
                            dataAlign='left'
                            editable={{type: 'checkbox', options: {values: '0:1'}, columnWidth: '30em'}}
                            filter={{
                                type: 'CustomFilter',
                                getElement: GetCustomFilter,
                                customFilterParameters: {Yes: 'Yes', No: 'No'}
                            }}
                        >In stock</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='date'
                            editable={{type: 'datetime'}}
                        >Sales date</TableHeaderColumn>
                    </BootstrapTable>
                    <p>
                        <button className='btn btn-md' onClick={this.getSelectedRowKeys.bind(this)}>Get selected
                        </button>
                        <button className='btn btn-md' onClick={handlerClickCleanFiltered.bind(this)}>Clear Filter
                        </button>
                    </p>
                </div>
            </div>
        );
    }
}

export default MainTable;
