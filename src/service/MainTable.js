import React, {Component} from 'react';
import CheckboxFilter from './CheckboxFilter';
import {BootstrapTable, TableHeaderColumn, InsertModalHeader} from "react-bootstrap-table";
import info from '../data/AddInfo';


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

class BSTable extends Component {
    render() {
        if (this.props.data) {
            return (
                <BootstrapTable data={this.props.data}>
                    <TableHeaderColumn dataField='color' isKey={true}>Color</TableHeaderColumn>
                    <TableHeaderColumn dataField='type'>Type</TableHeaderColumn>
                </BootstrapTable>);
        } else {
            return (<p>?</p>);
        }
    }
}


class MainTable extends Component {

    static isExpandableRow(row) {
        return !!row.id;
    }

    static expandComponent(row) {
        debugger;
        return (
            <BSTable data={row.properties}/>
        );
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
            mode: 'click'
        };
        const data = this.props.data;
        return (
            <div>
                <div className="react-bs-table-container">
                    <BootstrapTable
                        data={data}
                        selectRow={info.selectRowProp}
                        ref='table'
                        remote={MainTable.remote}
                        cellEdit={cellEditProp}
                        options={{
                            onCellEdit: this.props.onCellEdit,
                            onDeleteRow: this.props.onDeleteRow,
                            onAddRow: this.props.onAddRow,
                            insertModalHeader: this.createCustomModalHeader,
                            clearSearch: true,
                            expandRowBgColor: 'rgb(242, 255, 163)'
                        }}
                        expandableRow={MainTable.isExpandableRow}
                        expandComponent={MainTable.expandComponent}
                        expandColumnOptions={{
                            expandColumnVisible: true,
                            expandColumnComponent: MainTable.expandColumnComponent,
                            columnWidth: 50
                        }}
                        insertRow deleteRow search
                        striped hover condensed pagination>
                        <TableHeaderColumn
                            dataField="number"
                            width='50'
                            dataAlign='center'
                            isKey dataSort
                        >#</TableHeaderColumn>
                        <TableHeaderColumn
                            width='100'
                            dataAlign='center'
                            ref='Name'
                            dataField="name"
                            dataSort
                        >Name</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="price"
                            width='100'
                            dataAlign='center'
                        >Price</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="country"
                            width='300'
                        >Country</TableHeaderColumn>
                        <TableHeaderColumn
                            ref='Type'
                            dataField="qualityType" dataFormat={enumFormatter} formatExtraData={info.qualityType}
                            width='70'
                            dataAlign='center'
                            filter={{
                                type: 'CustomFilter',
                                getElement: GetCustomFilter,
                                customFilterParameters: {Yes: 'yes', No: 'no'}
                            }}>In stock</TableHeaderColumn>
                    </BootstrapTable>
                    <button className='btn btn-primary' onClick={this.getSelectedRowKeys.bind(this)}>Get selected
                    </button>
                    <button className='btn btn-primary' onClick={handlerClickCleanFiltered.bind(this)}>Clear Filter
                    </button>
                </div>
            </div>
        );
    }
}

// export default MainTable;
export default MainTable;
