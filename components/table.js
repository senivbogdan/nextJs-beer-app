import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Modals from "/components/Modal/Modal"
import {useDispatch} from "react-redux";
import Checkbox from "./checkbox"
import {BeerTagName, DivBeer} from "../atoms/BeerTagName"
import {BeerImg} from "../atoms/BeerImg";
import {BeerABV} from "../atoms/BeerABV";
import {BeerName} from "../atoms/BeerName";
import {TableDiv} from "../atoms/AllDivs";
import {Header} from "../pages/header";


const Tab = () => {
    const dispatch = useDispatch()
    const [beer, setBeer] = useState([])
    const [order, setOrder] = useState("ASC")
    const [modalActive, setModalActive] = useState(false)
    const [selectedObj, setSelectedObj] = useState({})
    const [isFilter, setIsFilter] = useState(false)
    let   [isCheсked, setIsCheсked] = useState(true)
    const [filterBeerArr, setFilterBeerArr] = useState([] || "")
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [kek, setKek] = useState([])

    useEffect(() => {
        if (fetching) {
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

    useEffect(() => {
        if (beer) {
            return beer.map(i => i.isChecked = false)
        }
    }, [beer])


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
    let check;

    const cheakFunc = (item) => { // USE MEMO ОБЕРНУТЬ
        item.isChecked === false ?  item.isChecked = true :  item.isChecked = false
        setIsCheсked(isCheсked => !isCheсked)
        setIsFilter(true)
        check = beer.filter((item) => item.isChecked === true)
        setKek(check)
        // console.log(kek)
        console.log(check)
    }

    const memoKek = useMemo(() => cheakFunc(beer), [beer])


    const raiseFunc = () => {
        setIsFilter(false)
        kek.length = 0
        setBeer(beer.map((i) => {
            i.isChecked = false
        }))
        setFilterBeerArr([])
        console.log(kek)
    }

    const compareBeer = () => {
        let chek = beer.filter((item) => item.isChecked === true)
        setKek(chek)
        // console.log(kek)
    }

    return (
        <>
            <TableDiv>
                <Header
                    isFilter={isFilter}
                    compareBeer={compareBeer}
                    raiseFunc={raiseFunc}
                    sortingABV={sortingABV}
                />
                    {
                        beer && beer.map((item, index) => (
                            <DivBeer
                                key={item.id}
                            >
                                <BeerName>{item.name}</BeerName>
                                <BeerTagName>{item.tagline}</BeerTagName>
                                <BeerImg>
                                    <Image
                                    onClick={() => handleClick(true, item.id)}
                                    src={`${item["image_url"]}`}
                                    alt=""
                                    layout='fill'
                                    objectFit='contain'
                                    className="picture"
                                /></BeerImg>
                                <BeerABV>
                                   <Checkbox
                                       item={item}
                                       cheakFunc={cheakFunc}
                                       isChecked={isCheсked}
                                   />
                                </BeerABV>
                            </DivBeer>

                        ))
                    }
            </TableDiv>
            <Modals
                selectedObj={selectedObj}
                modalActive={modalActive}
                setModalActive={setModalActive}
                beer={beer}
            />
        </>

    );
};

export default Tab;