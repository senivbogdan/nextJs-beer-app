import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Modals from "/Modal/Modal"
import Button from 'react-bootstrap/Button'
import {useDispatch, useSelector} from "react-redux";
import {selectBeer} from "../redux/actions";


const Tab = () => {
    const dispatch = useDispatch()
    const [beer, setBeer] = useState([])
    const [order, setOrder] = useState("ASC")
    const [modalActive, setModalActive] = useState(false)
    const [selectedObj, setSelectedObj] = useState({})
    const [isFilter, setIsFilter] = useState(0)
    const [isCheсked, setIsCheсked] = useState(false)
    const [filterBeerArr, setFilterBeerArr] = useState([] || "")
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        if (fetching) {
            console.log("as")
            axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}`)
                .then(response => {
                    setBeer([...beer, ...response.data])
                    setCurrentPage(prev => prev + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
            setFetching(true)
    }

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

    const handleClick = (bool, ids) => {
        // dispatch(selectBeer(ids))
        setModalActive(bool)
        setSelectedObj(beer[ids - 1])
    }

    const cheakFunc = (ids, i) => {
        if (beer[ids - 1].isChecked = true){
            beer[ids - 1].isChecked = false
            // filterBeerArr.pop(i)
            console.log(filterBeerArr)

        }
        dispatch(selectBeer(ids))
        filterBeerArr.push(i)
        setIsFilter(1)
        beer[ids - 1].isChecked = true
        console.log(filterBeerArr)
    }

    // console.log(filterBeerArr)

    const raiseFunc = () => {
        setIsFilter(0)
        beer.map((item) => {
            item.isChecked = false
        })
        setFilterBeerArr([])
    }


    return (
        <div>
            <div className={"table-div"}>
                <div className="article">
                    <h1>Список пива)))</h1>
                    <div className={ !isFilter ? "show-buttons" : "hide-buttons"}>
                        <Button variant="primary" className={"p-2 m-1"}>Сравнить пиво)</Button>{' '}
                        <Button variant="secondary" className={"p-2 m-2"} onClick={() => raiseFunc()}>Отмена</Button>{' '}
                    </div>
                </div>
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
                            <tr
                                key={item.id}
                                className={"tr-more-info"}
                            >
                                <td>{item.name}</td>
                                <td>{item.tagline}</td>
                                <td className={"picture-column px-1 py-5"}>
                                    <img
                                        onClick={() => handleClick(true, item.id)}
                                        className={"picture-table"}
                                        src={`${item["image_url"]}`}
                                        alt=""
                                    />
                                </td>
                                <td>
                                    <div className={"abv-col"}>
                                        <span>{item.abv}</span>
                                        <input
                                            type="checkbox"
                                            className={"s"}
                                            onClick={() => cheakFunc(item.id, item)}
                                            checked={item.isChecked}
                                        />
                                    </div>
                                </td>
                            </tr>

                        ))
                    }
                    </tbody>
                </Table>
            </div>
            <Modals
                selectedObj={selectedObj}
                modalActive={modalActive}
                setModalActive={setModalActive}
                beer={beer}
            />
        </div>

    );
};

export default Tab;