import {ABV, Article, List, Name, Names, Photo, TagLine} from "../atoms/AllDivs";
import Button from "react-bootstrap/Button";

export const Header  = ({isFilter, compareBeer, raiseFunc, sortingABV}) => {
    return (
        <>
            <Article>
            <List>Список пива)))</List>
            <div className={!isFilter ? "show-buttons" : "hide-buttons"}>
                <Button variant="primary" className="p-2 m-1" onClick={compareBeer}>Сравнить пиво)</Button>{' '}
                <Button variant="secondary" className="p-2 m-2" onClick={raiseFunc}>Отмена</Button>{' '}
            </div>
        </Article>
            <Names>
                <Name>Name</Name>
                <TagLine>Tagline</TagLine>
                <Photo>Photo</Photo>
                <ABV onClick={() => sortingABV("abv")}>ABV</ABV>
            </Names>
        </>
        )
}
