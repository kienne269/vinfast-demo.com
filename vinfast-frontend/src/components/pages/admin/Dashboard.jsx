import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
// import { useSelector } from 'react-redux'
import Table from '../../admin/table/Table';
import Badge from '../../admin/badge/Badge';
import dashboardApi from '../../../api/admin/dashboardApi';
import './dashboard.scss';

const statusCards = [
    {
        "icon": <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                </svg>,
        "count": "4.827$",
        "title": "Monthly Revenue",
        "path": "/admin/customers"
    },
    {
        "icon": <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>,
        "count": "16",
        "title": "New Orders",
        "path": "/admin/customers"
    },
    {
        "icon": <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                </svg>,
        "count": "8",
        "title": "Pending Reviews",
        "path": "/admin/customers"
    },
    {
        "icon": <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>,
        "count": "19",
        "title": "New Accounts",
        "path": "/admin/accounts"
    }
]

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    // const themeReducer = useSelector(state => state.ThemeReducer.mode)

    const [month, setMonth] = useState([])
    useEffect(() => {
        const getMonthApi = async () => {
            try {
                const res = await dashboardApi.getMonth()
                setMonth(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getMonthApi()            
    }, [])

    const chartOptions = {
        series: [{
            name: 'Online Customers',
            data: [month[0] ? month[0].count : 0, month[1] ? month[1].count : 0, month[3] ? month[3].count : 0, month[4] ? month[4].count : 0, month[5] ? month[5].count : 0,month[6] ? month[6].count : 0, month[7] ? month[7].count : 0, month[8] ? month[8].count : 0, month[9] ? month[9].count : 0, month[10] ? month[10].count : 0, month[11] ? month[11].count : 0, month[12] ? month[12].count : 0],
            // data: [month[0].month,month[2].month,month[3].month,month[4].month,month[5].month,month[6].month,month[7].month,month[8].month,month[9].month, month[10].month, month[11].month, month[12].month]
        // }, 
        // {
        //     name: 'Online Customers',
        //     data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10, 150, 250]
        }],
        options: {
            lor: ['#6ab04c'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: false
            }
        }
    }

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="l-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="l-6" key={index}>
                                    <div className='status-card'>
                                        <Link to={item.path}>
                                            <div className="status-card__icon">{item.icon}</div>
                                            <div className="status-card__info">
                                                <h4>{item.count}</h4>
                                                <span>{item.title}</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="l-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="l-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/admin'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="l-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/admin'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
