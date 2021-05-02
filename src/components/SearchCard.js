import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const SearchCard = () => {
    return (
        <Card style={{ width: '100%', height: '200px' }}>
            <Card.Body>
                <Form style={{ display: 'flex' }} action="/search" method="get">
                    <Form.Control type="search" name="query" placeholder="Search Torrents!" />
                    <Button variant="dark" style={{ height: '38px' }}>Search</Button>
                </Form>
                <Card.Text style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', textAlign: 'center' }}>
                    kstorrentse is a tribute to the torrentz.eu.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SearchCard;