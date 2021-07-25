import React, {useState,useEffect} from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useLocation } from "react-router-dom";

const Torrents = (props) => {
    let query = new URLSearchParams(useLocation().search);
    console.log(query.get("query"));



const Torrents = () => {
    const [torrents,setTorrents] = useState([]);
    const params = useLocation().search;
    useEffect(() => {
        const searchParams = new URLSearchParams(params);
        //console.log("http://localhost:3001/search?" + searchParams.toString());
        fetch("https://torrenticz.herokuapp.com/search?" + searchParams.toString())
        .then(res => res.json())
        .then(res => {
            setTorrents(res)            
        }).catch(err => console.error(err));
    }, [torrents,params]);


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
                    {
                        torrents.map((itr,i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{itr.Source}</td>
                                <td>{itr.Name}</td>
                                <td>{itr.Size}</td>
                                <td>{itr.Seeders}</td>
                                <td>{itr.Leechers}</td>
                                <td>{itr.UploadDate}</td>
                            </tr>
                        ))
                    }
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