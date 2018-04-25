Object.defineProperty(exports, "__esModule", {
    value: true
});

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

exports.enumFormatter = enumFormatter;