import Pagination from 'react-bootstrap/Pagination';

function Paginate({ page, setPage, pageSize }) {
    const previous = page?.previous;
    const next = page?.next;    
    
    return (
        <Pagination>
        <Pagination.Prev disabled={previous==null} onClick={() => {setPage(previous)}}/>
        <Pagination.Item active>{"-"}</Pagination.Item>
        <Pagination.Next disabled={next==null} onClick={ () => {setPage(next)}}/>
        </Pagination>
    );
}

export default Paginate;
