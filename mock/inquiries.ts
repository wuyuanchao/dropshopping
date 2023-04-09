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
  tag: string;
  goodsSn: string;
}

let inquiries: Inquiry[] = [
  { id: '1', name: 'Key-product', contact: '客户A 联系电话：13867623527', createdAt: '2023-04-03', items:[
      {id: '101', name: 'E5401-Suction Cup Whetstone', goodsSn: 'HSUG08IS', tag: 'RTS', link: 'https://www.clickpickme.co/products/suction-cup-whetstone-1'},
    ]
  },
  { id: '2', name: 'Precheck' , contact: '客户B QQ：456321', createdAt: '2023-04-01',items: [
    {id: '201', name: 'Tank With Built-In Bra', goodsSn: 'UY89SUH', tag: 'RTS', link: 'https://www.brayou.co/products/tank-with-built-in-bra-50-off-limited-time-only'},
    {id: '202', name: 'Men\'s Ethnic Style Linen Long-Sleeved T-Shirt', goodsSn: 'UJH3432', tag: 'RTS', link: 'https://www.koolmate.co/products/men-s-ethnic-style-linen-long-sleeved-t-shirt-50-off-limited-time-only'},
    {id: '203', name: 'Comfy Vintage Loose T-shirt', goodsSn: 'PLK097J', tag: 'Similar', link: 'https://www.koolmate.co/products/comfy-vintage-loose-t-shirt'},
    {id: '204', name: 'Summer sexy Push Up Wireless Bras', goodsSn: 'NBVS451', tag: 'RTS', link: 'https://www.brayou.co/products/summer-sexy-push-up-wireless-bras-hot-sale-50-off'},
    {id: '205', name: 'All Day Every Day Scoop Neck Cami', goodsSn: '', tag: 'WFP', link: 'https://www.brayou.co/products/empetua-all-day-every-day-scoop-neck-cami-sm544-02-1'},
    {id: '206', name: 'Bodysuit Shapewear', goodsSn: 'QPMK078', tag: 'RTS', link: 'https://www.brayou.co/products/bodysuit-shapewear-hot-sale-50-off'},
    {id: '207', name: 'The 3D Burrito Blanket', goodsSn: 'RTFGH9K', tag: 'RTS', link: 'https://radwish.com/products/mexican-burrito-blanket?fbclid=IwAR11tBSf1Pot07xLS2093KALBYUFkSdCAeMSFpr0zn5zq_0fGX92Af8Iewk'}
  ]},
];

let inquiryIdx = inquiries.reduce((map, obj) => {
  map[obj.id] = obj;
  return map;
}, {});

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
      data: inquiryIdx[req.params.id],
    });
  },
});