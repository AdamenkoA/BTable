import React from "react";
import {InsertModalHeader} from "react-bootstrap-table";
import {handleModalClose} from '../helper/handle'

export const createCustomModalHeader = (closeModal) => {
    return (
        <InsertModalHeader
            className='my-custom-class'
            title='This is my custom title'
            beforeClose={this.beforeClose}
            onModalClose={() => handleModalClose(closeModal)}/>
    );
};