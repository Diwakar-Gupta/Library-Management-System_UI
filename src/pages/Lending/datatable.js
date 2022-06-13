import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

function DataTable({ lendings }){
    return (
        <Table hover >
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Barcode</th>
                    <th>Issue Date</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
            {
                lendings
                .map( lend => 
                    <tr key={lend.pk}>
                        <td>{ lend.account.name }</td>
                        <td>{ lend.book_item.title }</td>
                        <td>{ lend.creation_date }</td>
                        <td>{ lend.due_date }</td>
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

