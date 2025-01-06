'use client'

import React from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MsgNotifProps {
  msg: string;
  error: boolean;
}

export default function MsgNotif({ msg, error }: MsgNotifProps) {
  React.useEffect(() => {
    if (msg) {
      toast(msg, {
        type: error ? 'error' : 'success',
        autoClose: 5000,
        position: "bottom-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          border: '2px solid',
          borderColor: error ? 'red' : 'green',
          borderRadius: '8px',
        },
      });
    }
  }, [msg, error]);

  return null;
}
