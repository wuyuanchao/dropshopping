import { Button, Popconfirm, Table } from 'antd';
import React from 'react';

const ProductList: React.FC<{ products: { name: string }[]; onDelete: (id: string) => void }> = ({
  onDelete,
  products,
}) => {
  const columns = [
    {
      title: '主图',
      render(text, record){
        return (
          <div>
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </div>
        )
      }
    },
    {
      title: 'SN',
      dataIndex: 'sn',
    },    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render(text, record) {
        return (
          <>
          <Button type="primary">编辑</Button>
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>删除</Button>
          </Popconfirm>
          </>
        );
      },
    },
  ];
  return <Table rowKey="id" dataSource={products} columns={columns} />;
};

export default ProductList;