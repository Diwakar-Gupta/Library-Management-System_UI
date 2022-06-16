import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

function DataTable({ lendings, lendingClickHandle, returnClickHandle }){
    return (
        <Table hover >
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Barcode</th>
                    <th>Issue Date</th>
                    <th>Due Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                lendings
                .map( lend => 
                    <tr key={lend.pk} onClick={() => {lendingClickHandle(lend.pk);}}>
                        <td>{ lend.account.name }</td>
                        <td>{ lend.book_item.title }</td>
                        <td>{ lend.creation_date }</td>
                        <td>{ lend.due_date }</td>
                        <td> <Button size="sm" variant="primary" onClick={(event) => {event.stopPropagation(); returnClickHandle(lend.pk); }}>Return</Button> </td>
                    </tr>
                )
            }

                {/* <tr>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr> */}
            </tbody>
        </Table>
    );
  }
export default DataTable;

