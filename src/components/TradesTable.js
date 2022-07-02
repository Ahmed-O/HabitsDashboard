import { flexbox } from '@chakra-ui/react';
import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Stock',
    selector: row => row.title,
    sortable: true,
  },
  {
    name: 'P/L',
    selector: row => row.pnl,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    date: '06/22/22',
    title: 'AERC',
    pnl: '+$500',
  },
  {
    id: 2,
    date: '06/24/22',
    title: 'TSLA',
    pnl: '-$300',
  },
  {
    id: 3,
    date: '06/24/22',
    title: 'TSLA',
    pnl: '-$300',
  },
  {
    id: 2,
    date: '06/24/22',
    title: 'TSLA',
    pnl: '-$300',
  },
  {
    id: 2,
    date: '06/24/22',
    title: 'TSLA',
    pnl: '-$300',
  },
  {
    id: 2,
    date: '06/24/22',
    title: 'TSLA',
    pnl: '-$300',
  },
  {
    id: 2,
    date: '06/24/22',
    title: 'TSLA',
    pnl: '-$300',
  },
];

const customStyles = {
  table: {
    style: {
      border: 'solid 1px black',
    },
  },
  headRow: {
    style: {
      border: 'none',
    },
  },
  headCells: {
    style: {
      color: '#202124',
      fontSize: '14px',
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: 'rgb(230, 244, 244)',
      borderBottomColor: '#FFFFFF',
      borderRadius: '25px',
      outline: '1px solid #FFFFFF',
    },
  },
  pagination: {
    style: {
      border: 'none',
      display: 'block',
    },
  },
};

function TradesTable() {
  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      highlightOnHover
      pointerOnHover
    />
  );
}

export default TradesTable;
