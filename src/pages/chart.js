import React from 'react';
import {Line} from "react-chartjs-2"

const BeerChart = ({checkedBeer}) => {
    return (
        <div>
            <h1 className={"hello"}>Hello</h1>
            <Line
                data={{
                    labels: ["asd", "asd","popa", "rghjed", "kekk","popa", "kuyuh", "kek", "popa"], //kek.map(item => item.name)
                    datasets: [{
                        label: 'Chart by ABV',
                        data: [65, 2, 10, 81, 56, 55, 40], // kek.map(item => item.abv)
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }}
                height={400}
                width={600}
            >
            </Line>
        </div>
    );
};

export default BeerChart;