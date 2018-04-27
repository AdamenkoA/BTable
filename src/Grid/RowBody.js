import React, {Component} from 'react';
import {Grid, Segment} from 'semantic-ui-react';

export default class RowBody extends Component {
    render() {
        const data = this.props.child;
        const rowHeads = Object.keys(data);
        const rowHead = rowHeads.map((item, index) => {
                if (index === rowHeads.length - 1) {
                    return (<div key={index}>{null}</div>)
                }
                else
                    return (
                        <Grid.Column key={index}>
                            <Segment> {data[item]}</Segment>
                        </Grid.Column>
                    )
            }
        );
        return (
            <Grid.Row>
                {rowHead}
            </Grid.Row>
        )
    }
}