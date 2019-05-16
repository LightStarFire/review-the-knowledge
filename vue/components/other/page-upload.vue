<!--
例子： <page-upload :fileList="fileList" :uploadName="data.uploadName"
                       :listType="data.data.listType" :imgWidth="data.data.imgWidth" :imgHeight="data.data.imgHeight" :limit="data.data.limit">
          </page-upload>
介绍：封装的el-upload
      withCredentials  --  支持发送 cookie 凭证信息  default: true
      showFileList  --  是否显示已上传文件列表  default: true
      multiple  --  是否支持多选  default: false
      fileList  --  文件列表  []
      listType  --  列表类型  default: 'text'
      type  --  上传类型 default: 'img'
      imgWidth  --  图片宽度  default: 690
      imgHeight  --  图片高度  default: 394
      limit  --  最大上传个数
      tipText  --  提示文字
      uploadName  --  上传的label
      @uploadSuccess  --  上传成功抛出的方法
-->
<template>
  <el-upload
    :headers="{'Content-Type':'multipart/form-data','Access-Control-Allow-Methods':'POST,OPTIONS'}"
    action=""
    :with-credentials="withCredentials"
    :show-file-list="showFileList"
    :multiple="multiple"
    :limit="limit"
    :file-list="fileList"
    :list-type="listType"
    ref="uploadRef"
    :http-request="uploadFile"
    :on-preview="handlePreview"
    :on-exceed="onExceed"
    :on-remove="uploadRemove"
    :before-upload="beforeUploadFile">
    <el-button slot="trigger" ref="uploadButtonRef" size="small" type="primary">{{uploadName}}</el-button>
    <div slot="tip" class="el-upload__tip">{{tipText}}</div>
  </el-upload>
</template>

<script>
export default {
  name: 'page-upload',
  props: {
    // 支持发送 cookie 凭证信息
    withCredentials: {
      type: Boolean,
      default: true
    },
    // 是否显示已上传文件列表
    showFileList: {
      type: Boolean,
      default: true
    },
    // 是否支持多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 文件列表
    fileList: {
      required: true,
      type: Array,
      default: () => []
    },
    // 列表类型
    listType: {
      default: 'text'
    },
    // 上传类型
    type: {
      type: String,
      default: 'img'
    },
    // 图片宽度
    imgWidth: {
      default: 690
    },
    // 图片高度
    imgHeight: {
      default: 394
    },
    // 最大上传个数
    limit: {
      default: 100
    },
    // 提示
    tipText: {
      default: '上传文件不能超过100M。'
    },
    uploadName: {
      default: '上传文件'
    },
    imgSizeLimit: {
      default: 1048576, // 1M
    },
    fileSizeLimit: {
      default: 104857600, // 100M
    }
  },
  data () {
    return {
      uploadPercent: 0
    }
  },
  methods: {
    // 检查文件
    checkFile (file) {
      const isLt100M = file.size < this.fileSizeLimit;
      console.log(isLt100M)
      if (!isLt100M) {
        this.$message.error(`上传文件大小不能超过 ${this.fileSizeLimit/1048576}M`);
      }
      return isLt100M;
    },
    // 检查图片
    checkImg (file) {
      let isFileFormat =
        file.type === 'image/jpg' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'application/pdf' ;
      const isLt10M = file.size < this.imgSizeLimit;
      if (!isFileFormat) {
        this.$message.error(this.zzlLang.allowUploadPic);
      }
      if (!isLt10M) {
        this.$message.error(`上传文件大小不能超过 ${this.imgSizeLimit/1048576}M`);
      }
      return isFileFormat && isLt10M;
    },
    // 上传文件之前
    beforeUploadFile(file) {
      let bool = null;
      if (this.type === 'img') {
        bool = this.checkImg(file);
      } else {
        bool = this.checkFile(file);
      }
      return bool;
    },
    // 上传文件
    async uploadFile (file) {
      const loading = this.$loading({
        lock: true,
        text: 0 + '%',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      let fd = new FormData();
      fd.append('file', file.file);
      let apiUrl = '';
      if (this.type === 'img') {
        apiUrl = this.zzlApi.uploadImg + `?width=${this.imgWidth}&height=${this.imgHeight}`;
      } else {
        apiUrl = this.zzlApi.uploadFile;
      }
      // 文件上传的进度
      let progress = _event => {
        this.uploadPercent = (_event.loaded / _event.total * 100).toFixed(0);
        loading.text = this.uploadPercent + '%';
      };
      const res = await this.zzlHttp.post(apiUrl, fd, progress);
      if (res.code === 0) {
        let fileUrl = '';
        let thumbnail = '';
        if (this.type === 'img') {
          fileUrl = this.zzlApi.domain + 'upload/image/' + res.data[0].FileFolder + '/' + res.data[0].BannerName;
          thumbnail = this.zzlApi.domain + 'upload/image/' + res.data[0].FileFolder + '/' + res.data[0].ThumbnailName;
        } else {
          fileUrl = res.data.uri[0];
        }
        let obj = {
          name: file.file.name,
          url: fileUrl,
          thumbnail: thumbnail,
          type: file.file.type
        };
        this.fileList.push(obj);
        this.$message.success(this.zzlLang.uploadSuccess);
        this.$emit('uploadSuccess')
      } else {
        this.fileList = [];
        this.$message.error(this.zzlLang.uploadFail);
      }
      loading.close();
      this.uploadPercent = 0;
    },
    // 预览文件
    handlePreview (file) {

    },
    // 移除已上传文件
    uploadRemove (file) {
      for (let i in this.fileList) {
        if (this.fileList[i].uid === file.uid) {
          this.fileList.splice(i, 1);
          break;
        }
      }
    },
    // 超过最大限制
    onExceed () {
      this.$message.warning(`有且只能有${this.limit}个文件，请先删除多余的文件`);
    }
  }
}
</script>

<style scoped>
</style>
