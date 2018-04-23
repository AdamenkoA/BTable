import React, {Component} from 'react';

class CheckboxFilter extends Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        CheckboxFilter.isFilteredYes = CheckboxFilter.isFilteredYes.bind(this);
        CheckboxFilter.isFilteredNo = CheckboxFilter.isFilteredNo.bind(this);
    }

    filter() {
        if (this.refs.CheckBox.checked) {
            this.props.filterHandler({callback: CheckboxFilter.isFilteredYes});
        } else {
            this.props.filterHandler({callback: CheckboxFilter.isFilteredNo});
        }
    }

    static isFilteredYes(targetValue) {
        return !targetValue;
    }

    static isFilteredNo(targetValue) {
        return !!targetValue;
    }

    cleanFiltered() {
        this.refs.CheckBox.checked = true;
        this.props.filterHandler();
    }

    render() {
        return (
            <div>
                <input ref='CheckBox' type='checkbox' className='filter' onChange={this.filter}
                       defaultChecked={true}/>
            </div>
        );
    }
}

export default CheckboxFilter;