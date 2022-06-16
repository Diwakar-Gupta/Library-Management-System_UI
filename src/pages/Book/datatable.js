import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge';

function DataTable({ books, bookClickHandle }){
    return (
        <Table hover >
            <thead>
                <tr>
                    <th>isbn</th>
                    <th>Title</th>
                    <th>subject</th>
                    <th>publisher</th>
                    <th>language</th>
                    <th>numer_of_pages</th>
                    <th>is_available</th>
                </tr>
            </thead>
            <tbody>
            {
                books
                .map( book => 
                    <tr key={ book.isbn} onClick={ () =>{ bookClickHandle(book.isbn) } }>
                        <td>{ book.isbn }</td>
                        <td>{ book.title }</td>
                        <td>{ book.subject }</td>
                        <td>{ book.publisher }</td>
                        <td>{ book.language }</td>
                        <td>{ book.numer_of_pages }</td>
                        <td>{ book.is_available?(<Badge bg="primary">Available</Badge>):(<Badge bg="warning" text="dark">Not Available</Badge>) }</td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    );
  }
export default DataTable;

