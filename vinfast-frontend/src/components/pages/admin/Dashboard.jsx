import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
// import { useSelector } from 'react-redux'
import accountApi from '../../../api/account';
import customerApi from '../../../api/depost/customerApi';
import dashboardApi from '../../../api/admin/dashboardApi';
import './dashboard.scss';

const topAccount = {
    head: [
        'id',
        'avatar',
        'name',
    ]
}

const renderAccountHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderAccountBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>
            <img src={item.avatar} alt="" />
        </td>
        <td>{item.name}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "name",
        "price",
        "date",
        "status"
    ]
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.published_at}</td>
        <td>
            {
                item.status === "pending" ? <span className="badge badge-warning">{item.status}</span> : null
            }
            {
                item.status === "accept" ? <span className="badge badge-success">{item.status}</span> : null
            }
            {
                item.status === "reject" ? <span className="badge badge-danger">{item.status}</span> : null
            }
        </td>
    </tr>
)

const Dashboard = () => {

    const [customerData, setCustomerData] = useState([])
    const [accountData, setAccountData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => { 
        const getCustomerApi = async () => {
            try {
                const res = await customerApi.getAll()
                setCustomerData(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getCustomerApi()

        const getAccountApi = async () => {
            try {
                const res = await accountApi.getAll()
                setAccountData(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getAccountApi()
    }, [])

    useEffect(() => {
        const getTotalPrice = async () => {
            try {
                const res = await dashboardApi.getTotal()
                setTotalPrice(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getTotalPrice()
    }, [])

    const accept = (month) => {
        return customerData.filter(item => item.status === 'accept' && item.published_at.slice(0, 7) === `2022-${month}`)
    }

    const reject = (month) => {
        return customerData.filter(item => item.status === 'reject' && item.published_at.slice(0, 7) === `2022-${month}`)
    }

    const pending = (month) => {
        return customerData.filter(item => item.status === 'pending' && item.published_at.slice(0, 7) === `2022-${month}`)
    }
    const accept1 = accept('01')
    const reject1 = reject('01')
    const pending1 = pending('01')
    const accept2 = accept('02')
    const reject2 = reject('02')
    const pending2 = pending('02')
    // const getFiveOrder = () => {
    //     return customerData.filter(() => )
    // }
    // const fiveOrder = getFiveOrder()
    const chartOptions = {
        series: [{
            name: 'Accept Customers',
            data: [accept1.length, accept2.length, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }, 
        {
            name: 'Reject Customers',
            data: [reject1.length, reject2.length, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, 
        {
            name: 'Pending Customers',
            data: [pending1.length, pending2.length, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }],
        options: {
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

    const statusCards = [
        {
            "icon": <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
                    </svg>,
            "count": totalPrice[0] ? totalPrice[0].total + 'đ' : 0,
            "title": "Monthly Revenue",
            "path": "/admin/customers"
        },
        {
            "icon": <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>,
            "count": pending1.length + pending2.length,
            "title": "New Orders",
            "path": "/admin/customers"
        },
        // {
        //     "icon": <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        //                 <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
        //             </svg>,
        //     "count": "8",
        //     "title": "Pending Reviews",
        //     "path": "/admin/customers"
        // },
        {
            "icon": <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>,
            "count": accountData.length,
            "title": "New Accounts",
            "path": "/admin/accounts"
        }
    ]
    console.log(customerData.reduce((a, b) => parseInt(a) + parseInt(b.price.replaceAll('đ', '').replaceAll('.', '')), 0))
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
                            <h3>top account</h3>
                        </div>
                        <div className="card__body">
                            <div className="table-wrapper">
                                <table>
                                    {
                                        topAccount.head ? (
                                            <thead>
                                                <tr>
                                                    {
                                                        topAccount.head.map((item, index) => renderAccountHead(item, index))
                                                    }
                                                </tr>
                                            </thead>
                                        ) : null
                                    }
                                    {
                                        accountData ? (
                                            <tbody>
                                                {
                                                    accountData.map((item, index) => renderAccountBody(item, index))
                                                }
                                            </tbody>
                                        ) : null
                                    }
                                </table>
                            </div>
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
                            <div className="table-wrapper">
                                <table>
                                    {
                                        latestOrders.header ? (
                                            <thead>
                                                <tr>
                                                    {
                                                        latestOrders.header.map((item, index) => renderOrderHead(item, index))
                                                    }
                                                </tr>
                                            </thead>
                                        ) : null
                                    }
                                    {
                                        customerData ? (
                                            <tbody>
                                                {
                                                    customerData.map((item, index) => renderOrderBody(item, index))
                                                }
                                            </tbody>
                                        ) : null
                                    }
                                </table>
                            </div>
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
