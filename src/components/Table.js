import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const TableComponent = () => {
  const data = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        symbol: "EURUSD.i",
        type: i % 2 === 0 ? "Sell" : "Buy",
        openDate: "02-3-24, 06:12:16",
        openPrice: "2.80568",
        sl: "0",
        tp: "0",
        closeDate: "02-3-24, 06:12:16",
        closePrice: "1.80568",
        lots: "100",
        profit: i % 2 === 0 ? "-$5.00" : "+$9.00",
        duration: "11s",
        gain: i % 2 === 0 ? "-0.01%" : "+0.01%",
      })),
    []
  );

  const columns = useMemo(
    () => [
      { accessorKey: "symbol", header: "Symbol" },
      { accessorKey: "type", header: "Type" },
      { accessorKey: "openDate", header: "Open Date" },
      { accessorKey: "openPrice", header: "Open Price" },
      { accessorKey: "sl", header: "SL" },
      { accessorKey: "tp", header: "TP" },
      { accessorKey: "closeDate", header: "Close Date" },
      { accessorKey: "closePrice", header: "Close Price" },
      { accessorKey: "lots", header: "Lots" },
      { accessorKey: "profit", header: "Profit" },
      { accessorKey: "duration", header: "Duration" },
      { accessorKey: "gain", header: "Gain" },
    ],
    []
  );

  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="">
      <div className="flex items-center justify-between pb-4">
        <h2 className="font-semibold text-lg">Order History</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-800 text-white rounded">Open Trades</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded">Closed Trades</button>
          <div className="border border-gray-300 rounded px-4 py-2 text-gray-600">
            Last 30 Day
          </div>
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border-b py-2 px-4 text-gray-600">
                  <div
                    onClick={header.column.getToggleSortingHandler()}
                    className="flex items-center cursor-pointer"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted()] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 px-4 border-b text-gray-600">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <div>
          Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}-
          {(table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize} of{" "}
          {table.getFilteredRowModel()?.rows.length ?? data.length}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-4 py-2 rounded ${
              table.getCanPreviousPage()
                ? "text-blue-500"
                : "text-gray-300"
            }`}
          >
            <FaAngleLeft />
          </button>
          {Array.from({ length: table.getPageCount() }).map((_, index) => (
            <button
              key={index}
              onClick={() => table.setPageIndex(index)}
              className={`px-4 py-2 rounded ${
                table.getState().pagination.pageIndex === index
                  ? "text-blue-500"
                  : "text-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`px-4 py-2 rounded ${
              table.getCanNextPage()
                ? "text-blue-500"
                : "text-gray-300"
            }`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
