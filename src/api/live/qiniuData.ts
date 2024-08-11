import {IQiniuData} from './interface';
import axios from "@/request/axios";

export interface IQiniuKey {
  prefix: string;
  hash: string;
  ext: string;
}

export function fetchQiniuUploadToken(params: IQiniuKey) {
  return axios.get('/qiniu_data/get_token', {params});
}

export function fetchQiniuDataList(params: any) {
  return axios.get('/qiniu_data/list', {
    params,
  });
}

export function fetchDiff(params: any) {
  return axios.get('/qiniu_data/diff', {
    params,
  });
}

// 上传图片
export function fetchUpload(data: IQiniuKey) {
  // data:new FormData {prefix,uploadFiles}
  return axios.post<{
    flag: boolean;
    respBody?: any;
    respErr?: any;
    respInfo?: any;
    resultUrl?: string;
  }>('/qiniu_data/upload', data, {
    timeout: 1000 * 60,
  });
}

// 上传chunk
export function fetchUploadChunk(data) {
  // data:new FormData {prefix,uploadFiles}
  return axios.post<{ percentage: number }>(
      '/qiniu_data/upload_chunk',
      data,
      {
        headers: {'Content-Type': 'multipart/form-data;'},
        timeout: 1000 * 60,
      }
  );
}

// 合并chunk
export function fetchUploadMergeChunk(data) {
  // data:new FormData {prefix,uploadFiles}
  return axios.post('/qiniu_data/merge_chunk', data, {
    timeout: 1000 * 60,
  });
}

// 获取上传图片进度
export function fetchUploadProgress(params: IQiniuKey) {
  return axios.get<{ percentage?: number }>('/qiniu_data/progress', {
    timeout: 1000 * 10, // 以免并发轮询获取进度的时候超时
    params,
  });
}

export function fetchCreateLink(data: IQiniuData) {
  return axios.post('/qiniu_data/create', data);
}

export function fetchUpdateQiniuData(data: IQiniuData) {
  return axios.put(`/qiniu_data/update/${data.id!}`, data);
}

export function fetchDeleteQiniuData(id: number) {
  return axios.delete(`/qiniu_data/delete/${id}`);
}

// eslint-disable-next-line camelcase
export function fetchDeleteQiniuDataByQiniuKey(qiniu_key: string) {
  return axios.delete(`/qiniu_data/delete_by_qiniukey`, {
    params: {qiniu_key}
  });

}
