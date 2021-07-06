import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useLocation } from "react-router-dom";

const Torrents = (props) => {
    let query = new URLSearchParams(useLocation().search);
    console.log(query.get("query"));



    return (
        <>
            <Form style={{ display: 'flex', marginBottom: '10px' }} action="/search" method="get">
                <Form.Control type="search" name="query" placeholder="Search Torrents!" />
                <Button variant="dark" style={{ height: '38px' }} type="submit">Search</Button>
            </Form>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Source</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Seeders</th>
                        <th>Leechers</th>
                        <th>Upload Date</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>


            <Pagination style={{ paddingLeft: '25%', paddingRight: '25%' }}>
                <Pagination.Prev style={{ marginLeft: '25%' }} />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next style={{ marginRight: '25%' }} />
            </Pagination>
        </>
    );
}


export default Torrents;