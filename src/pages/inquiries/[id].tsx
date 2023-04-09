import InquiryDetail from '@/components/InquiryDetail';
import axios from 'axios';
import React from 'react';
import { useMutation, useQuery, useQueryClient, useParams } from 'umi';
import styles from '../products.less';

export default function Page() {
    const params = useParams();
    console.log(params)
    // const inquiriesQuery = useQuery(['inquiries'], {
    //   queryFn() {
    //     return axios.get('/api/inquiries/'+params.id).then((res) => res.data);
    //   },
    // });
    // if (inquiriesQuery.isLoading) return null;

    const inqueryDetail = params.id == 1 ?
    { id: '1', name: 'Key-product', contact: '客户A 联系电话：13867623527', createdAt: '2023-04-03', items:[
        {id: '1', name: 'E5401-Suction Cup Whetstone', link: 'https://www.clickpickme.co/products/suction-cup-whetstone-1'},
      ]
    }:
    { id: '2', name: 'Precheck' , contact: '客户B QQ：456321', createdAt: '2023-04-01',items: [
        {id: '2', name: 'Tank With Built-In Bra', link: 'https://www.brayou.co/products/tank-with-built-in-bra-50-off-limited-time-only'},
        {id: '3', name: 'Men\'s Ethnic Style Linen Long-Sleeved T-Shirt', link: 'https://www.koolmate.co/products/men-s-ethnic-style-linen-long-sleeved-t-shirt-50-off-limited-time-only'}
    ]}
    return (
      <div>
        <h1 className={styles.title}>询价单详情 </h1>
        <InquiryDetail inquiry={inqueryDetail}
        />
      </div>
    );
  }