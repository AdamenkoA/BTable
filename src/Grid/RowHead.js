import React, {Component} from 'react';
import {Grid, Segment} from 'semantic-ui-react';

export default class RowHead extends Component {
    render() {
        const rowHeads = this.props.child;
        const rowHead = rowHeads.map((item, index) => {
            if (index === rowHeads.length - 1) {
                return (<div key={index}>{null}</div>)
            }
            return (
                <Grid.Column key={index}>
                    <Segment color='orange'> {item}</Segment>
                </Grid.Column>)

        });
        return (
            <Grid.Row>
                {rowHead}
            </Grid.Row>
        )
    }
}