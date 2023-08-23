import React from 'react'

const TableTd = ({ label, value, responsive, span, classes = '' }) => {

    return (
        <td colSpan={span} className={`dark:text-slate-400 table-cell ${(responsive) ? "before:font-bold md:before:hidden before:min-w-half before:dark:text-slate-200 before:content-[attr(data-label)] md:table-cell" : ''} ${classes} `} data-label={label}>{value}</td>
    )
}

export default TableTd