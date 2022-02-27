import React from "react";
import styles from "./index.module.scss";

interface IColumn {
  key: string;
  title: string;
}

interface IDataItem {
  [key: string]: string | React.ReactNode
}

interface ITableProps {
  columns: IColumn[];
  data: IDataItem[];
}

const Table = ({ columns = [], data = [] }: ITableProps) => {
  return (
    <div className={`table ${styles.table}`}>
      {columns.length && (
        <div className={`table-header ${styles.tableHeader}`}>
          {columns.map(column => (
            <div key={column.key} className={`table-header-item ${styles.tableHeaderItem}`}>
              {column.title}
            </div>
          ))}
        </div>
      )}
      {data.map((item, index) => (
        <div key={index} className={`table-header-row ${styles.tableHeaderRow}`}>
          {columns.map(column => (
            <div key={`${index}-${column.key}`} className={`table-header-row-item ${styles.tableHeaderRowItem}`}>
              {item[column.key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
};

export default Table;
