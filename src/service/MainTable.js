import React, {Component} from 'react';
import CheckboxFilter from './CheckboxFilter';
import {BootstrapTable, TableHeaderColumn, InsertModalHeader} from "react-bootstrap-table";
import info from '../data/AddInfo';

/*import BSTable from "./BSTable";*/

function enumFormatter(cell, row, enumObject) {
    return enumObject[cell];
}

function handlerClickCleanFiltered() {
    this.refs.Name.cleanFiltered();
    this.refs.Type.cleanFiltered();
}

function handleModalClose(closeModal) {
    closeModal();
}

function GetCustomFilter(filterHandler, customFilterParameters) {
    return (
        <CheckboxFilter filterHandler={filterHandler} Yes={customFilterParameters.Yes}/>
    );
}

/*function isExpandableRow() {
    return true;
}

function expandComponent(row) {
    return (
        <BSTable data={row.properties}/>
    );
}*/

function idValidator(value) {
    value = parseInt(value);
    if (!Number.isInteger(value) || value <= 0) {
        return 'Id must be a integer and greater than zero!';
    }
    return true;
}

function priceValidator(value) {
    const nan = isNaN(parseInt(value, 10));
    if (nan) {
        return 'Price must be a number!';
    }
    if (value <= 0) {
        return 'Price must be greater than zero!'
    }
    return true;
}

function nameValidator(value) {
    if (!value) {
        return 'Name is a required field!';
    }
    return true;
}


class MainTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanding: []
        };
    }

    static expandColumnComponent({isExpandableRow, isExpanded}) {
        let content = !!isExpandableRow ? (isExpanded ? '(-)' : '(+)') : ' ';
        return (
            <div> {content} </div>
        );
    }

    createCustomModalHeader = (closeModal) => {
        return (
            <InsertModalHeader
                className='my-custom-class'
                title='This is my custom title'
                beforeClose={this.beforeClose}
                onModalClose={() => handleModalClose(closeModal)}/>
        );
    };

    getSelectedRowKeys() {
        console.log(this.refs.table.state.selectedRowKeys)
    };

    static remote(remoteObj) {
        remoteObj.cellEdit = true;
        remoteObj.insertRow = true;
        remoteObj.dropRow = true;
        remoteObj.deleteRow = true;
        return remoteObj;
    }


    render() {
        const cellEditProp = {
            mode: 'click',
            blurToSave: true
        };
        const keyBoardNav = {
            enterToEdit: true
        };
        const data = this.props.data;
        return (
            <div className="react-bs-table-update">
                <div className="react-bs-table-container">
                    <BootstrapTable
                        data={data}
                        // selectRow={info.selectRowProp}
                        ref='table'
                        dataAlign='center'
                        remote={MainTable.remote}
                        cellEdit={cellEditProp}
                        options={{
                            onCellEdit: this.props.onCellEdit,
                            onDeleteRow: this.props.onDeleteRow,
                            onAddRow: this.props.onAddRow,
                            insertModalHeader: this.createCustomModalHeader,
                            clearSearch: true,
                            expandRowBgColor: 'rgb(242, 255, 163)',
                            expanding: this.state.expanding
                        }}
                        keyBoardNav={keyBoardNav}
                        /*expandableRow={isExpandableRow}
                        expandComponent={expandComponent}
                        expandColumnOptions={{
                            expandColumnVisible: true,
                            expandColumnComponent: MainTable.expandColumnComponent,
                            columnWidth: 20
                        }}*/
                        insertRow deleteRow search
                        striped hover condensed pagination
                    >
                        <TableHeaderColumn
                            dataField="number"
                            width='50'
                            dataAlign='center'
                            isKey dataSort
                            editable={{validator: idValidator}}
                        >#</TableHeaderColumn>
                        <TableHeaderColumn
                            width='100'
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
                            editable={{type: 'select', options: {values: info.jobType}}}
                        >Job Type</TableHeaderColumn>
                        <TableHeaderColumn
                            ref='Type'
                            dataField="qualityType" dataFormat={enumFormatter} formatExtraData={info.qualityType}
                            width='100'
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

// export default MainTable;
export default MainTable;
