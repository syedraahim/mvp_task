import React, { useContext } from "react";
import { ContextApiData } from "../../ContextApi/ContextApiData";
import { countTotalAmount } from "../../utils/totalData";
import { Doughnut, ArcElement } from 'react-chartjs-2';
import 'chart.js/auto';

function Chart() {
    const { allData, selectedProjectOrGateway } = useContext(ContextApiData);
    const { reports } = allData;

    const getLabel = () => {
        return selectedProjectOrGateway.map(item => {
            return item.name;
        })
    }
    const getData = (reports) => {
        return selectedProjectOrGateway.map(item => {
            return countTotalAmount(item, reports);
        })
    }
    const isChartNotDisplayed = !selectedProjectOrGateway || selectedProjectOrGateway.length < 2;

    const dataValues = getData(reports);
    const data = {
        labels: getLabel(),
        datasets: [
            {
                label: 'Dataset 1',
                data: dataValues,
                backgroundColor: ['#A259FF', '#F24E1E', '#FFC107', '#6497B1'],
            }
        ]
    };
    if (isChartNotDisplayed) {
        return null;
    }
    return (
        <div className='chart'>
            <Doughnut
                data={data}
            />
        </div>
    )
}

export default Chart;