import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter} from '@fortawesome/free-solid-svg-icons';


const inlineContent = {
    'flexDirection': 'row',
    'display': 'flex',
    'alignItems': 'center'
};

export default function Filters({title, filters, setFilters}){

    const page_sizes = [5, 10, 20, 50];

    return (
        <Row>
            <Col style={inlineContent}>
                Show
                <DropdownButton color='black' id="dropdown-basic-button" variant="" title={filters.page_size}>
                    {
                        page_sizes
                        .map(size => 
                            <Dropdown.Item key={size} onClick={ () => { setFilters({page_size:size}) } }>{size}</Dropdown.Item>
                        )
                    }
                </DropdownButton>
                entries
            </Col>
            <Col></Col>
            <Col sm={1}><FontAwesomeIcon color={"black"} icon={faFilter} /></Col>
        </Row>
    );
}