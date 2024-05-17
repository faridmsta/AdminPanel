import React from 'react'
import "./Usertable.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Usertable() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];

    const rows = [
        {
            id: 958684,
            name: "Rashad",
            email: "rashad@gmail.com",
            password: "rashad2023",
            phone: "1234567890",
            address: "Azerbaijan",
            isActive: "Active"
        },
        {
            id: 187265,
            name: "Rahul",
            email: "rahul@hotmail.com",
            password: "12345678r",
            phone: "1234567890",
            address: "Russia",
            isActive: "Deactive"

        },
        {
            id: 379249,
            name: "Francesko",
            email: "francesko@gmail.com",
            password: "francesko82",
            phone: "1234567890",
            address: "Brasil",
            isActive: "Active"

        },
        {
            id: 714582,
            name: "Ahmat",
            email: "ahhmad1972@gmail.com",
            password: "ahm@t10102005",
            phone: "1234567890",
            address: "Azerbaijan",
            isActive: "Active"

        },
        {
            id: 824248,
            name: "Daniel",
            email: "daniel@gmail.com",
            password: "daniford9910",
            phone: "1234567890",
            address: "England",
            isActive: "Deactive"

        },
        {
            id: 581227,
            name: "Ravan",
            email: "Rmaqamadeov@gmail.com",
            password: "r@Van2005",
            phone: "1234567890",
            address: "Azerbaijan",
            isActive: "Active"

        }
    ]

    return (
        <div className="tableWrapper">
            <div className="title">All Users</div>

            <TableContainer className='tableItself' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Phone</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((item) => (
                            <TableRow key={item.id} >
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell component="th" scope="row">{item.name}</TableCell>
                                <TableCell >{item.email}</TableCell>
                                <TableCell >{item.phone}</TableCell>
                                <TableCell >{item.address}</TableCell>
                                <TableCell className="avtiveRow " > <span className={`${item.isActive}`}>{item.isActive}</span> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Usertable