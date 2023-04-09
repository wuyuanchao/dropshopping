import { Button, Table, Tag, Modal, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';

const InquiryDetail: React.FC<{ inquiry }> = ({
    inquiry
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requiredMark, setRequiredMarkType] = useState("RTS");
  const [form] = Form.useForm();
  const tagColorMap = {'RTS':'green', 'Similar': 'blue', 'WFP':'red'}

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        title: '关联供货SN',
        dataIndex: 'goodsSn'
    },
    {
        title: '关联标记',
        dataIndex: 'tag',
        render(text, record) {
            return (
                <Tag color={tagColorMap[text]} key={record.id}>{text}</Tag>
            );
          },
    },
    {
      title: 'Actions',
      render(text, record) {
        return (
            <Button onClick={showModal}>关联商品</Button>
        );
      },
    },
  ];
  return <>
        <h1>{inquiry.name}</h1>
        <h3>{inquiry.contact}</h3>
        <Table rowKey="id" dataSource={inquiry.items} columns={columns} />
        <Modal title="关联商品" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            onValuesChange={({ requiredMarkValue }) => {
              setRequiredMarkType(requiredMarkValue);
            }}
            requiredMark={true}
          >
            <Form.Item label="标记" name="requiredMarkValue" required tooltip={{ title: '选择一种关联标记', icon: <InfoCircleOutlined /> }}>
              <Radio.Group>
                <Radio.Button value="RTS">RTS</Radio.Button>
                <Radio.Button value="Similar">Similar</Radio.Button>
                <Radio.Button value="WFP">WFP</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="商品SN" required={requiredMark != "WFP"}>
              <Input placeholder="填写商品库中的商品SN" />
            </Form.Item>
          </Form>
      </Modal>
  </>;
};

export default InquiryDetail;