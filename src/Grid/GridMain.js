import React, {Component} from 'react';
import {Grid, Icon, Pagination, Segment, Sidebar} from 'semantic-ui-react';
import product from '../Table/data/random';
import RowHead from './RowHead'
import RowBody from './RowBody'

const numberEntries = 7;
const totalPages = !!product && product.length > 0 ? Math.ceil(product.length / numberEntries) : 1;

class PaginationEx extends Component {
    // componentDidMount()

    render() {
        return (
            <Pagination
                defaultActivePage={1}
                ellipsisItem={{content: <Icon name='ellipsis horizontal'/>, icon: true}}
                firstItem={{content: <Icon name='angle double left'/>, icon: true}}
                lastItem={{content: <Icon name='angle double right'/>, icon: true}}
                prevItem={{content: <Icon name='angle left'/>, icon: true}}
                nextItem={{content: <Icon name='angle right'/>, icon: true}}
                totalPages={totalPages}
                onPageChange={this.props.handler}
            />
        )
    }
}


class GridMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: product,
            headRows: [],
            bodyRows: []
        };
    };

    handlePageChange(event, data) {
        const prod = product.slice();
        const newProduct = prod.splice(numberEntries * (data.activePage - 1), data.activePage * numberEntries);
        this.setState({
            data: newProduct
        });
    };

    render() {
        const data = this.state.data;
        const dataHead = Object.keys(product[0]);
        const headRows = (
            <RowHead child={dataHead}/>
        );
        const bodyRows = data.map((item, index) => {
                return (
                    <RowBody child={item} key={index}/>
                )
            }
        );

        return (
            <div className="semantic-div-grid">
                <div className="semantic-header-grid">
                    <Grid
                        columns='equal'
                        verticalAlign={'top'}
                        divided
                        centered
                        stretched
                    >
                        {headRows}
                    </Grid>
                </div>
                <div className="semantic-body-grid">
                    <Sidebar.Pushable as={Segment}>
                        <Grid
                            columns='equal'
                            verticalAlign={'top'}
                            divided
                            centered
                            stretched
                        >
                            {bodyRows}
                        </Grid>
                    </Sidebar.Pushable>

                </div>
                <PaginationEx handler={this.handlePageChange.bind(this)}/>
            </div>
        );
    }
}

export default GridMain;
