import { defineMock } from 'umi';

type Inquiry = {
  id: string;
  name: string;
  contact: string;
  createdAt: string;
  items: InquiryItem[];
};

type InquiryItem = {
  id: string;
  name: string;
  link: string;
}

let inquiries: Inquiry[] = [
  { id: '1', name: 'Key-product', contact: '客户A 联系电话：13867623527', createdAt: '2023-04-03', items:[
      {id: '1', name: 'E5401-Suction Cup Whetstone', link: 'https://www.clickpickme.co/products/suction-cup-whetstone-1'},
    ]
  },
  { id: '2', name: 'Precheck' , contact: '客户B QQ：456321', createdAt: '2023-04-01',items: [
    {id: '2', name: 'Tank With Built-In Bra', link: 'https://www.brayou.co/products/tank-with-built-in-bra-50-off-limited-time-only'},
    {id: '3', name: 'Men\'s Ethnic Style Linen Long-Sleeved T-Shirt', link: 'https://www.koolmate.co/products/men-s-ethnic-style-linen-long-sleeved-t-shirt-50-off-limited-time-only'}
  ]},
];

export default defineMock({
  'GET /api/inquiries': (_, res) => {
    res.send({
      status: 'ok',
      data: inquiries,
    });
  },
  'GET /api/inquiries/:id': (req, res) => {
    res.send({
      status: 'ok',
      data: { id: '2', name: 'Precheck' , contact: '客户B QQ：456321', createdAt: '2023-04-01',items: [
        {id: '2', name: 'Tank With Built-In Bra', link: 'https://www.brayou.co/products/tank-with-built-in-bra-50-off-limited-time-only'},
        {id: '3', name: 'Men\'s Ethnic Style Linen Long-Sleeved T-Shirt', link: 'https://www.koolmate.co/products/men-s-ethnic-style-linen-long-sleeved-t-shirt-50-off-limited-time-only'}
      ]},
    });
  },
});