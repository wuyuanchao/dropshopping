import { Button, Table } from 'antd';
import React from 'react';
import { Link } from 'umi';

const InquiryList: React.FC<{ inquries: { name: string }[] }> = ({
  inquries
}) => {
  const columns = [
    {
      title: '询价单名称',
      dataIndex: 'name',
    },
    {
      title: '客户信息',
      dataIndex: 'contact'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt'
    },
    {
      title: 'Actions',
      render(text, record) {
        return (
          <Link to={"/inquiries/"+record.id}>查看详情</Link>
        );
      },
    },
  ];
  return <Table rowKey="id" dataSource={inquries} columns={columns} />;
};

export default InquiryList;