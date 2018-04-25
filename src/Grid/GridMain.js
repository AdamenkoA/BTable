import React, {Component} from 'react';
import {Grid, Pagination, Segment} from 'semantic-ui-react';
import product from '../Table/data/random';

class PaginationExampleShorthand extends Component {
    render() {
        return (
            <Pagination
                defaultActivePage={1}
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={3}
            />
        )
    }
}

class Row extends Component {
    render() {
        return (
            <Grid.Row>
                <Grid.Column key={1}>
                    <Segment>  {this.props.child.number}</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment> {this.props.child.price}</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment> {this.props.child.country}</Segment>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

class GridMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: product
        };
    };

    render() {
        const data = product.slice();
        const bodyRows = data.map((item, index) => {
                return (
                    <Row child={item} key={index}/>

                )
            }
        );
        return (
            <div>
                <Grid
                    columns='equal'
                    verticalAlign={'top'}
                    divided
                    centered
                    stretched>
                    {bodyRows}
                </Grid>
                <PaginationExampleShorthand/>
            </div>
        );
    }
}

export default GridMain;
