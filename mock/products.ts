import { defineMock } from 'umi';

type Product = {
  id: string;
  sn: string;
  name: string;
};

let products: Product[] = [
  { id: '1', sn: 'UY89SUH', name: 'Tank With Built-In Bra' },
  { id: '2', sn: 'UJH3432', name: 'Men\'s Ethnic Style Linen Long-Sleeved T-Shirt' },
  { id: '3', sn: 'PLK097J', name: 'Comfy Vintage Loose T-shirt' },
  { id: '4', sn: 'QPMK078', name: 'Bodysuit Shapewear' },
];

export default defineMock({
  'GET /api/products': (_, res) => {
    res.send({
      status: 'ok',
      data: products,
    });
  },
  'DELETE /api/products/:id': (req, res) => {
    products = products.filter((item) => item.id !== req.params.id);
    res.send({ status: 'ok' });
  },
});