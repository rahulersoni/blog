import React from 'react'

const TableRow = ({ children }) => {
    return (
        <tr className='aa className="flex flex-col md:table-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"'>{children}</tr>
    )
}

export default TableRow