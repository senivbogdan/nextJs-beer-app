import Link from "next/link";
import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"


const Index = () => {
    const [beer, setBeer] = useState([])
    const [order, setOrder] = useState("ASC")

    useEffect(() => {
        const fetchPostsList = async () => {
            const {data} = await axios("https://api.punkapi.com/v2/beers")
            setBeer(data)
        }
        fetchPostsList()
    }, [setBeer])

    const sortingABV = (name) => {
        if (order === "ASC") {
            const sorted = beer.sort((a, b) => {
                return a[name] - b[name]
            })
            setBeer(sorted)
            setOrder("DSC")
        } else if (order === "DSC") {
            const sorted = beer.sort((a, b) => {
                return b[name]- a[name]
            })
            setBeer(sorted)
            setOrder("ASC")
        }

    }


    return (
        <div className={"table-div"}>
            <h1>Список пива)))</h1>
            <Table striped bordered hover className="tableTab">
                <thead>
                <tr>
                    <th>
                        <div>Name</div>
                    </th>
                    <th>
                        <div>Tagline</div>
                    </th>
                    <th>
                        <div>Photo</div>
                    </th>
                    <th>
                        <div className="container" onClick={() => sortingABV("abv")}>ABV</div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    beer && beer.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.tagline}</td>
                            <td>
                                <Link href={`/beers/${item.id}`}>
                                    <a><img src={`${item["image_url"]}`} alt="" /></a>
                                </Link>
                                </td>
                            <td>{item.abv}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    );
};

export default Index;