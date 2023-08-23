import React from 'react'
import Page from '../../templates/Page'
import { Link } from 'react-router-dom'
import TableTd from '../../components/table/TableTd'
import TableRow from '../../components/table/TableRow'
import { currenty } from '../../constants/Constants'

const Orders = ({ id }) => {

    const orderList = [
        {
            id: 10,
            package: 'Basic',
            total: 6,
            time: '16-10-2023',
            price: 2000
        },
        {
            id: 20,
            package: 'Advanced',
            total: 20,
            time: '22-12-2024',
            price: 4000
        },
        {
            id: 30,
            package: 'Customized',
            total: 56,
            time: '08-11-2023',
            price: 6000
        },
    ]

    const currentOrder = orderList.find(el => Number(el.id) === Number(id));
    console.log(currentOrder);

    return (
        <Page title="Orders" classes="dashboard-orders bg-zinc-100 dark:bg-slate-700">
            {!id ? <>
                <section className='pt-14 pl-5 pr-5'>
                    <h2>Order List</h2>
                    <p className='mt-3'>Your package order history. You can also check the individual order details by click on edit button.</p>
                </section>

                <section className='m-5 mb-14 pt-14 pb-14 pl-5 pr-5 rounded-lg bg-white dark:bg-slate-900'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-200 dark:text-gray-400">
                            <thead className="text-xs bg-primary text-white uppercase dark:bg-slate-700 dark:text-gray-400">
                                <tr className='hidden md:table-row'>
                                    <th scope="col" className="px-6 py-4">Package name</th>
                                    <th scope="col" className="px-6 py-4">Total Post</th>
                                    <th scope="col" className="px-6 py-4">Time</th>
                                    <th scope="col" className="px-6 py-4">Price</th>
                                    <th scope="col" className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {orderList.length ? <>
                                    {orderList?.map(order => (
                                        <TableRow key={order.id}>

                                            <TableTd value={order.package} label="Package name" responsive={true} classes="dark:text-white " />

                                            <TableTd value={order.total} label="Total Posts" responsive={true} />
                                            <TableTd value={order.time} label="Time" responsive={true} />
                                            <TableTd value={`${currenty + order.price}`} label="Price" responsive={true} />

                                            <TableTd value={<Link to={`/dashboard/orders/?order_id=${order.id}`} className="font-medium py-2 px-4 rounded-lg bg-slate-600 text-white dark:bg-slate-700 dark:hover:bg-slate-900 dark:text-slate-400 hover:underline">Edit</Link>} label="Actions" responsive={true} classes="md:text-right " />
                                        </TableRow>
                                    ))}
                                </> : <>
                                    <TableRow><TableTd value={`You don't have any order history.`} span="5" /></TableRow>
                                </>}

                            </tbody>
                        </table>
                    </div>

                </section>
            </> : <>
                <>
                    <section className='pt-14 pl-5 pr-5'>
                        <h2>Order Information</h2>
                        <p className='mt-3'>Details information about the order, expirey, other necessory information.</p>
                    </section>

                    <section className='m-5 mb-14 flex flex-col md:flex-row gap-5  '>
                        <div className='bg-white flex-1 pt-8 pb-8 pl-5 pr-5 rounded-lg dark:bg-slate-900'>
                            <h4 className='mb-4'>Package Infroamtion</h4>
                            <div className="flex gap-3 mb-3 items-center dark:text-white">
                                <div className='font-bold text-lg flex-1'>Package Name : </div>
                                <div className='flex-1'> {currentOrder.package}</div>
                            </div>
                            <div className="flex gap-3 mb-3 items-center dark:text-white">
                                <div className='font-bold text-lg flex-1'>Total Posts : </div>
                                <div className='flex-1'> {currentOrder.total} </div>
                            </div>
                            <div className="flex gap-3 mb-3 items-center dark:text-white">
                                <div className='font-bold text-lg flex-1'>Expiration Date : </div>
                                <div className='flex-1'> {currentOrder.time}</div>
                            </div>
                        </div>

                        <div className='bg-white flex-1 pt-8 pb-8 pl-5 pr-5 rounded-lg dark:bg-slate-900'>
                            <h4 className='mb-4'>Pyament Infroamtion</h4>
                            <div className="flex gap-3 mb-3 items-center dark:text-white">
                                <div className='font-bold text-lg flex-1'>Pyament Method : </div>
                                <div className='flex-1'>Paypal</div>
                            </div>
                            <div className="flex gap-3 mb-3 items-center dark:text-white">
                                <div className='font-bold text-lg flex-1'>Total Price : </div>
                                <div className='flex-1'> {currenty + currentOrder.price} </div>
                            </div>
                        </div>
                    </section>

                </>
            </>}
        </Page>
    )
}

export default Orders