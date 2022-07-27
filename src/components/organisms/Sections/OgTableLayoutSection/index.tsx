import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import { TableLayoutSectionProps } from 'types/ContentSettings/TableLayoutSectionSettings';
import { table,th,td } from './index.css';

export const OgTableLayoutSection = (props: TableLayoutSectionProps) => {

  const items = [
    {tableHeader: "header1", tableData: 'Data'},
    {tableHeader: "header2", tableData: 'Data'},
    {tableHeader: "header3", tableData: 'Data'},
    {tableHeader: "header4", tableData: 'Data'},
    {tableHeader: "header5", tableData: 'Data'},
    {tableHeader: "header6", tableData: 'Data'},
    {tableHeader: "header7", tableData: 'Data'},
    {tableHeader: "header8", tableData: 'Data'},
    {tableHeader: "header9", tableData: 'Data'},
    {tableHeader: "header10", tableData: 'Data'},
    {tableHeader: "header11", tableData: 'Data'},
    {tableHeader: "header12", tableData: 'Data'},
  ]

  return (
    <section>
      <div className="inner">
        <table className={table}>
          <tbody>
            {items.map((item, index) => {

              return (
                <tr key={index}>
                  <th className={th}>{item.tableHeader}</th>
                  <td className={td}>{item.tableData}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section >
  )
}
