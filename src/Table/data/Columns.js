this.state = {
    selected: [],
    currPage: 1
};
let exp = {
    columns: [
        {
            Header: "number",
            Name: "number"
        },
        {
            Header: "name",
            Name: "name"
        }
    ],
    selectRowProp: {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: this.onRowSelect,
        onSelectAll: this.onSelectAll,
        selected: this.state.selected
    },
    options: {
        sizePerPageList: [5, 10, 15, 20],
        sizePerPage: 10,
        page: this.state,
        sortName: 'id',
        sortOrder: 'desc'
    }
};