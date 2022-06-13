import Pagination from 'react-bootstrap/Pagination';

function Paginate({ page, setPage }) {
    const previous = page?.previous;
    const next = page?.next;    
    
    return (
        <Pagination>
        {/* <Pagination.First /> */}
        <Pagination.Prev disabled={previous==null} onClick={() => {setPage(previous)}}/>
        <Pagination.Item disabled></Pagination.Item>
        {/* <Pagination.Item >{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{3}</Pagination.Item> */}
        <Pagination.Next disabled={next==null} onClick={ () => {setPage(next)}}/>
        {/* <Pagination.Last disabled/> */}
        </Pagination>
    );
}

export default Paginate;
