"use client";

import { Divider, Form, Select, Table, TableColumnsType } from "antd";
import React, { useState } from "react";
import Date from "./date";
const { Option } = Select;
export default function Balance_sheet() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Form>
          <Form.Item
            name={["address", "province"]}
            noStyle
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Select placeholder="Select Name">
              <Option value="Teja">Teja</Option>
              <Option value="Sai">Sai</Option>
              <Option value="Shiva">Shiva</Option>
            </Select>
          </Form.Item>
        </Form>

        <>
          <Date />
        </>
      </div>
      <div>
        <>
          <Table columns={columns} dataSource={data} size="middle" />
        </>
      </div>
    </>
  );
}

interface DataType {
  key: React.Key;
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Opening Balance",
    dataIndex: "opening_balance",
  },
  {
    title: "Credit",
    dataIndex: "credit",
  },
  {
    title: "Debit",
    dataIndex: "debit",
  },
  {
    title: "Balance",
    dataIndex: "balance",
  },
  {
    title: "Bill_Number",
    dataIndex: "bill_number",
  },
  {
    title: "Mode_Of_Pay",
    dataIndex: "mode_of_pay",
  },
  {
    title: "To",
    dataIndex: "to",
  },
  {
    title: "Note",
    dataIndex: "Note",
  },
];

const data: DataType[] = [
  // add data hear
];
