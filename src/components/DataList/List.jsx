import React, { useContext } from 'react';
import './index.css';
import { ContextApiData } from "../../ContextApi/ContextApiData";
import { countTotalAmount } from "../../utils/totalData";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
export const componentRef = React.createRef();

const List = () => {

    const { allData, selectedProjectOrGateway } = useContext(ContextApiData);
    const { reports } = allData;

    if (!selectedProjectOrGateway.length || !selectedProjectOrGateway.length) {
        return 'Sorry no Data to display';
    }

    return (
        <Accordion defaultActiveKey="0">
            {selectedProjectOrGateway.map(item => (
                <>
                    <Accordion.Item eventKey={item.name} className='table-accordion'>
                        <Accordion.Header>{item.name} <b className='total'>TOTAL: {countTotalAmount(item, reports).toLocaleString()} USD</b></Accordion.Header>
                        <Accordion.Body>
                            <Table striped hover>
                                <tbody>
                                    <tr>
                                        <td>Date</td>
                                        <td>Transaction ID</td>
                                        <td>Amount</td>
                                    </tr>
                                    {reports.filter(report => report[`${item.itemType === 'gateway' ? 'gatewayId' : 'projectId'}`] === item.id).map(report => (
                                        <tr>
                                            <td>{report.created}</td>
                                            <td>{report.paymentId}</td>
                                            <td>{report.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br />
                </>
            ))}
        </Accordion>
    );
};

export default List;