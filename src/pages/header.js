import {ABV, Article, List, Name, Names, Photo, TagLine} from "../atoms/AllDivs";
import Button from "react-bootstrap/Button";
import { ButtonContainer } from "../atoms/ButtonContainer";
import Link from 'next/link'

export const Header  = ({checkedBeer, isFilter, compareBeer, raiseFunc, sortingABV}) => {
    return (
        <>
            <Article>
            <List>Список пива)))</List>
            <ButtonContainer isFilter={isFilter}>
                <Button variant="primary" className="p-2 m-1" onClick={compareBeer}> <Link
                    checkedBeer={checkedBeer}
                    href="/src/pages/chart"><a className="link">Сравнить пиво)</a></Link></Button>{' '}
               <Button variant="secondary" className="p-2 m-2" onClick={raiseFunc}>Отмена</Button>{' '}
            </ButtonContainer>
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
