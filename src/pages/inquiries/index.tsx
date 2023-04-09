import InquiryList from '@/components/InquiryList';
import axios from 'axios';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'umi';
import styles from '../products.less';

export default function Page() {
    const inquiriesQuery = useQuery(['inquiries'], {
      queryFn() {
        return axios.get('/api/inquiries').then((res) => res.data);
      },
    });
    if (inquiriesQuery.isLoading) return null;
    console.log(inquiriesQuery.data.data)
    return (
      <div>
        <h1 className={styles.title}>询价单列表</h1>
        <InquiryList inquries={inquiriesQuery.data.data} />
      </div>
    );
  }