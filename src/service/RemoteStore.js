import React, {Component} from 'react';
import MainTable from './MainTable';
import product from '../data/random';


class RemoteStoreAlternative extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: product
        };
    };

    onCellEdit = (row, fieldName, value) => {
        const findProduct = product.slice();
        let rowIdx;
        const targetRow = findProduct.find((prod, i) => {
            if (prod.number === row.number) {
                rowIdx = i;
                return true;
            }
            return false;
        });
        if (targetRow) {
            targetRow[fieldName] = value;
            findProduct[rowIdx] = targetRow;
            this.setState({findProduct});
        }
    };

    onAddRow = (row) => {
        const newProduct = product.slice();
        newProduct.push(row);
        this.setState({
            data: newProduct
        });
    };

    onDeleteRow = (row) => {
        const newProduct = product.slice();
        const deletedProducts = newProduct.filter((product) => {
            return row.indexOf(product.number) === -1;
        });
        this.setState({
            data: deletedProducts
        });
    };

    render() {
        return (
            <MainTable
                onCellEdit={this.onCellEdit}
                onAddRow={this.onAddRow}
                onDeleteRow={this.onDeleteRow}
                data={this.state.data}
            />
        );
    }
}

export default RemoteStoreAlternative;
