import React from 'react';

const Checkbox = ({ item, cheakFunc, isCheсked}) => {
    return (
        <div className={"check-box"}>
            <span>{item.abv}</span>
            <input
                className="s"
                type="checkbox"
                onClick={() =>  cheakFunc(item)}
                checked={isCheсked}
            />
        </div>
    );
};

export default Checkbox;