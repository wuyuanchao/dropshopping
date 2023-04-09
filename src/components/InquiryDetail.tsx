import { Button, Table, Tag } from 'antd';
import React from 'react';

const InquiryDetail: React.FC<{ inquiry }> = ({
    inquiry
}) => {
  const columns = [
    {
      title: '商品名称',
      dataIndex: 'name',
    },
    {
      title: '商品链接',
      dataIndex: 'link'
    },
    {
        title: '关联供货SN'
    },
    {
        title: '关联标记',
        render(text, record) {
            return (
                <Tag color='green' key='RTS'>RTS</Tag>
            );
          },
    },
    {
      title: 'Actions',
      render(text, record) {
        return (
            <Button onClick={() =>  alert(record.id)}>关联商品</Button>
        );
      },
    },
  ];
  return <>
        <h1>{inquiry.name}</h1>
        <h3>{inquiry.contact}</h3>
        <Table rowKey="id" dataSource={inquiry.items} columns={columns} />
  </>;
};

export default InquiryDetail;