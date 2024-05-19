export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 160,
        renderCell: (params) => {
            return (
                <div className='fullNameCell'>
                    <img src={params.row.profile_photo || ''} alt="Profile photo" />
                    <span>
                        {params.row.firstName || ''} {params.row.lastName || ''}
                    </span>
                </div>

            )
        }
    },
    { field: 'email', headerName: 'E-mail', width: 300 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'number',
        width: 90,
        renderCell: (params) => {
            return (
                <div className='statusCell'>
                    <span className={`${params.row.status}`}>
                        {params.row.status }
                    </span>
                </div>

            )
        }
    },
];


export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'tecaso9929@huleos.com', profile_photo: 'https://randomuser.me/api/portraits/lego/7.jpg', status: 'Active' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: '231253lldfkgdkgsifs@ourl.me', profile_photo: 'https://randomuser.me/api/portraits/lego/5.jpg', status: 'Deactive' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,email: 'byxlo93@growfortunenote.com', profile_photo: 'https://randomuser.me/api/portraits/lego/8.jpg', status: 'Active' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'mosban@btcmod.com', profile_photo: 'https://randomuser.me/api/portraits/lego/2.jpg', status: 'Active' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: 'la4ey@scriblehow.com', profile_photo: 'https://randomuser.me/api/portraits/lego/3.jpg', status: 'Pending' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 15, email: 'milanacherry@douiitystsaa.com', profile_photo: 'https://randomuser.me/api/portraits/lego/4.jpg', status: 'Active' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'jgish78@alphabeticallysa.sit', profile_photo: 'https://randomuser.me/api/portraits/lego/6.jpg', status: 'Active' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'bonwitt@strafford.ru', profile_photo: 'https://randomuser.me/api/portraits/lego/8.jpg', status: 'Active' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,email: 'jshannon@touch.net', profile_photo: 'https://randomuser.me/api/portraits/lego/9.jpg', status: 'Deactive' },
];


