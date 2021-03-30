import React from 'react';
import {useTable, useRowSelect, useSortBy, useExpanded} from 'react-table';
import './Table.scss';

/* eslint-disable */

const IndeterminateCheckbox = React.forwardRef(
    ({indeterminate, ...rest}, ref) => {
        const defaultRef = React.useRef();
        const resolvedRef = ref || defaultRef;

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate;
        }, [resolvedRef, indeterminate]);

        return (
            <>
                <input ref={resolvedRef} type="checkbox" {...rest}/>
            </>
        );
    }
);

const SortIndicator = ({isSorted, isSortedDesc}) => {
    if (isSorted) {
        return isSortedDesc ? ' 🔽' : ' 🔼';
    }

    return null;
};

export const Table = () => {
    const data = React.useMemo(
        () => [
            {
                name: 'Demo Roles and Users',
                type: 'Page',
                createdBy: 'root',
                lastModifiedOn: 'Aug. 12, 2016'
            },
            {
                name: 'About',
                type: 'Page',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 6, 2016',
                subRows: [
                    {
                        name: 'History',
                        type: 'Page',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 6, 2016',
                        subRows: [
                            {
                                name: 'banner',
                                type: 'Banner',
                                createdBy: 'root',
                                lastModifiedOn: 'Feb. 4, 2016'
                            },
                            {
                                name: 'Baumquist Joins Digitall As Controller',
                                type: 'News Entry',
                                createdBy: 'root',
                                lastModifiedOn: 'Jan. 21, 2016'
                            }
                        ]
                    },
                    {
                        name: 'Leadership',
                        type: 'Page',
                        createdBy: 'root',
                        lastModifiedOn: 'Jan. 6, 2016'
                    }
                ]
            },
            {
                name: 'Search Results',
                type: 'Page',
                createdBy: 'system',
                lastModifiedOn: 'Feb. 29, 2016'
            },
            {
                name: 'Corporate Responsibility',
                type: 'Page',
                createdBy: 'root',
                lastModifiedOn: 'Jan. 26, 2016'
            }
        ],
        []
    );

    const columns = React.useMemo(
        () => [
            {
                id: 'selection',
                Header: ({getToggleAllRowsSelectedProps}) => (
                    <div>
                        <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()}/>
                    </div>
                ),
                Cell: ({row}) => (
                    <div>
                        <IndeterminateCheckbox {...row.getToggleRowSelectedProps()}/>
                    </div>
                )
            },
            {
                id: 'expander',
                Header: ({getToggleAllRowsExpandedProps, isAllRowsExpanded}) => (
                    <span {...getToggleAllRowsExpandedProps()}>
                        {isAllRowsExpanded ? '👇' : '👉'}
                    </span>
                ),
                Cell: ({row}) => {
                    if (row.canExpand) {
                        return (
                            <span {...row.getToggleRowExpandedProps({style: {paddingLeft: `${row.depth * 2}rem`}})}>
                                {row.isExpanded ? '👇' : '👉'}
                            </span>
                        );
                    }

                    return null;
                }
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Type',
                accessor: 'type'
            },
            {
                Header: 'Created By',
                accessor: 'createdBy'
            },
            {
                Header: 'Last Modified On',
                accessor: 'lastModifiedOn'
            }
        ], []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {columns, data},
        useSortBy,
        useExpanded,
        useRowSelect
    );

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} key="1">
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} key={column.id}>
                                        {column.render('Header')}
                                        <SortIndicator isSorted={column.isSorted} isSortedDesc={column.isSortedDesc}/>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={row.id}>
                            {row.cells.map(cell => (
                                <td {...cell.getCellProps()} key={Math.random()}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
