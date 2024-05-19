import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../datatablesource";

const actionColumn = [
    {
        field: 'action',
        headerName: 'Action',
        type: 'number',
        width: 200,
        renderCell: (params) => {
            return (
                <div className='actionCell'>
                    <span className='viewButton'>View</span>
                    <span className='delButton'>Delete</span>
                </div>

            )
        }
    },
]

function Datatable() {
    return (
        <div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 20, 30, 50, 100]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable