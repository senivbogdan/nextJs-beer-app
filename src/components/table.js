import {useEffect, useState} from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modals from "/src/components/Modal/Modal"
import {useDispatch, useSelector} from "react-redux";
import Checkbox from "./checkbox"
import {BeerTagName, DivBeer} from "../atoms/BeerTagName"
import {BeerImg} from "../atoms/BeerImg";
import {BeerABV} from "../atoms/BeerABV";
import {BeerName} from "../atoms/BeerName";
import {TableDiv} from "../atoms/AllDivs";
import {Header} from "../pages/header";
import {getBeers} from "../reducer/beers/actions";
import {selectBeersForPage} from "../reducer/beers/selectors";

const Tab = () => {
    const dispatch = useDispatch()
    const beers = selectBeersForPage();
    const [beer, setBeer] = useState([])
    const [order, setOrder] = useState("ASC")
    const [modalActive, setModalActive] = useState(false)
    const [selectedObj, setSelectedObj] = useState({})
    const [isFilter, setIsFilter] = useState(false)
    let   [isCheсked, setIsCheсked] = useState(true)
    const [filterBeerArr, setFilterBeerArr] = useState([] || "")
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [checkedBeer, setCheckedBeer] = useState([])

    useEffect(() => {
        if (fetching){
            dispatch(getBeers(currentPage))
            setCurrentPage(prev => prev + 1)
            setFetching(false)
        }
    }, [dispatch, fetching])

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

    const cheakFunc = (item) => {
        item.isChecked === false ?  item.isChecked = true :  item.isChecked = false
        setIsCheсked(isCheсked => !isCheсked)
        setIsFilter(true)
        check = beer.filter((item) => item.isChecked === true)
        setCheckedBeer(check)
    }
    console.log(checkedBeer)

    const raiseFunc = () => {
        setIsFilter(false)
        checkedBeer.length = 0
        setBeer(beer.map((i) => {
            i.isChecked = false
        }))
        setFilterBeerArr([])
        console.log(checkedBeer)
    }

    const compareBeer = () => {
        let chek = beer.filter((item) => item.isChecked === true)
        setCheckedBeer(chek)
        // console.log(checkedBeer)
    }

    return (
        <>
            <TableDiv>
                <Header
                    checkedBeer={checkedBeer}
                    isFilter={isFilter}
                    compareBeer={compareBeer}
                    raiseFunc={raiseFunc}
                    sortingABV={sortingABV}
                />
                    {beers?.map((item) => (
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