'use strict';

import axios from 'axios';
import api from '../providers/api';
import Vue from 'vue'
const _that = new Vue();

axios.interceptors.request.use(
  config => {
    // loading
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.resolve(error.res);
  }
);

function checkStatus(res, showModal) {
  // loading
  let loading = null;
  if (showModal) {
    loading = _that.$loading({
      lock: true,
      text: "系统正在努力加载,请耐心等待",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
  }
  // 如果状态码正常，这直接返回数据
  if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
    if (showModal) {
      loading.close();
    }
    return res.data;
    // 如果不需要data以外的数据直接return res.data
  }
  // 异常状态下，把错误信息返回出去
  let str = '';
  if (!res) {
    str = '';
  } else {
    str = !res.status ? 'res.status获取不到' : res.status;
  }
  if (showModal) {
    loading.close();
  }
  return {
    data: {
      status: res.status,
      msg: '状态码错误'
    }
  };
}

function checkCode(res) {
  // 如果code异常（这里已经包括网络错误，服务器错误，后端抛出错误），可以弹出一个错误提示，告诉用户
  if (!(res.code === 0 || res.code === 200)) {
    // _that.$message.error('请求失败');
  }
  return res;
}

export default {
  // (api链接 参数 是否显示模态框 上传进度的回调函数)
  post(url, data, showModal = false, callback = function() {}) {
    return axios({
      method: 'post',
      baseURI: api.domain,
      url: api.domain + url,
      data: data,
      withCredentials: true,
      onUploadProgress: function(progressEvent) {
        if (progressEvent) {
          callback(progressEvent);
        }
      },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST,OPTIONS'
      }
    }).then(res => {
        return checkStatus(res, showModal);
    }).then(res => {
        return checkCode(res);
    });
  },
  get(url, params) {
    return axios({
      method: 'get',
      baseURI: api.domain, // QA Server
      url: api.domain + url,
      params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => {
        return checkStatus(res);
    }).then(res => {
        return checkCode(res);
    });
  }
};
