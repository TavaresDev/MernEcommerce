import React from 'react'

import { Table} from 'react-bootstrap'

const TableContainer = ({children}) => {
    
    return (
        <Table striped bordered hover responsive className='table-sm text-center'>
            {children}
        </Table>
    )
}

export default TableContainer
