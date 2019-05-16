import Vue from 'vue'
const _that = new Vue();

// 获取表格数据
async function getTableData (_url, _params, _showModal) {
  const res = await _that.zzlHttp.post(_url, _params, _showModal);
  if (res.code === 0) {
    return res.data
  }
}

// 删除表格数据
async function delTableData (_url, _params, _showModal, ) {
  const res = await _that.zzlHttp.post(_url, _params, _showModal);
  if (res.code === 0) {
    return res.data
  }
}

// 广告管理table
export const activityBgTable = {
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: 'created_time',
    by: 0
  },
  config: [
    {
      prop: 'bannertype',
      label: '广告类型',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'bannerdata',
      label: '广告内容',
      sort: false,
      type: 'banner',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'bannerwidth',
      label: '宽度',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'bannerheight',
      label: '高度',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'description',
      label: '描述',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'createname',
      label: '创建人',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'createtime',
      label: '创建时间',
      sort: false,
      type: 'time',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '100'
    }
  ]
  // {
  //   prop: 'name',
  //   label: '修改人',
  //   sort: false,
  //   type: 'text',
  //   fixed: false,
  //   minWidth: ''
  // },
  // {
  //   prop: 'name',
  //   label: '修改时间',
  //   sort: false,
  //   type: 'text',
  //   fixed: false,
  //   minWidth: ''
  // },
};

// 考试题目列表table
export const contentInfoTable ={
  config: [
    {
      prop: 'sortid',
      label: '序号',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '50'
    },
    {
      prop: 'content',
      label: '题目',
      sort: false,
      type: 'text',
      fixed: false,
      width: '200'
    },
    {
      prop: 'answer',
      label: '正确答案',
      sort: false,
      type: 'answer',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'score',
      label: '分值',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '50'
    },
    {
      prop: 'qb_type',
      label: '题型',
      sort: false,
      type: 'qb_type',
      fixed: false,
      minWidth: '50'
    },
    {
      prop: 'option_a',
      label: '选项A',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'option_b',
      label: '选项B',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'option_c',
      label: '选项C',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'option_d',
      label: '选项D',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'option_e',
      label: '选项E',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'option_f',
      label: '选项F',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'option_g',
      label: '选项G',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'option_h',
      label: '选项H',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: false,
      minWidth: '150'
    }
  ]
};

export const contentColumnsTable = {
  tableData:[],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: '',
    by: 0,
  },
  config:[{
    prop: 'index',
    label: '序号',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '150',
  },{
    prop: 'title',
    label: '内容名称',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '150'
  },{
    prop: 'code',
    label: '英文名称',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '150',
  },{
    prop: 'sub_title',
    label: '分类',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '150',
  },
  {
    prop: 'display',
    label: '是否显示',
    sort: false,
    type: 'display',
    fixed: false,
    minWidth: '150',
  },
  {
    prop: 'operation',
    label: '操作',
    type: 'operation',
    fixed: 'right',
    minWidth: '150'
  }]
};


export const storyManageTable = {
  maxHeight: '680',
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: 'created_time',
    by: 1
  },
  config: [
    {
      prop: 'audit',
      label: '审核',
      sort: false,
      type: 'audit',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'status',
      label: '审核状态',
      sort: true,
      type: 'status',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'sticky',
      label: '置顶',
      sort: false,
      type: 'sticky',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'content',
      label: '发布内容',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '600'
    },
    // {
    //   prop: 'images',
    //   label: '图片',
    //   sort: false,
    //   type: 'images',
    //   fixed: false,
    //   minWidth: ''
    // },
    {
      prop: 'member_name',
      label: '发布人',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '80'
    },
    {
      prop: 'created_time',
      label: '发布时间',
      sort: true,
      type: 'time',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'category_title',
      label: '故事分类',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '85'
    },
    {
      prop: 'thumbup_count',
      label: '点赞数',
      sort: true,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    {
      prop: 'comment_count',
      label: '评论数',
      sort: true,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    {
      prop: 'share_count',
      label: '转发数',
      sort: true,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    // {
    //   prop: 'tagnames',
    //   label: '关联标签',
    //   sort: false,
    //   type: 'text',
    //   fixed: false,
    //   minWidth: '100'
    // },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '100'
    }
  ]
  // {
  //   prop: 'name',
  //   label: '修改人',
  //   sort: false,
  //   type: 'text',
  //   fixed: false,
  //   minWidth: ''
  // },
  // {
  //   prop: 'name',
  //   label: '修改时间',
  //   sort: false,
  //   type: 'text',
  //   fixed: false,
  //   minWidth: ''
  // },
};


export const topicManageTable = {
  maxHeight: '680',
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: 'created_time',
    by: 1
  },
  config: [
    {
      prop: 'audit',
      label: '审核',
      sort: false,
      type: 'audit',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'status',
      label: '审核状态',
      sort: true,
      type: 'status',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'content',
      label: '发布内容',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '600'
    },
    {
      prop: 'member_name',
      label: '发布人',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'created_time',
      label: '发布时间',
      sort: true,
      type: 'time',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'section_link_name',
      label: '发布路径',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '200'
    },
    {
      prop: 'thumbup_count',
      label: '点赞数',
      sort: true,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    {
      prop: 'comment_count',
      label: '评论数',
      sort: true,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    {
      prop: 'share_count',
      label: '转发数',
      sort: true,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    // {
    //   prop: 'tagnames',
    //   label: '关联标签',
    //   sort: false,
    //   type: 'tagnames',
    //   fixed: false,
    //   minWidth: '100'
    // },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '100'
    }
  ]
};
export const tagManageTable = {
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: 'created_time',
    by: 1
  },
  config: [
    {
      prop: 'audit',
      label: '审核',
      sort: false,
      type: 'audit',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'status',
      label: '审核状态',
      sort: true,
      type: 'status',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'tagname',
      label: '标签',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'member_name',
      label: '标签发起人',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'created_time',
      label: '创建时间',
      sort: false,
      type: 'time',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'created_time',
      label: '最新发布时间',
      sort: true,
      type: 'time',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'thumbup_count',
      label: '发布分类',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'ref_count',
      label: '总引用数',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '100'
    }
  ]
};
export const storyCommentManageTable = {
  maxHeight: '680',
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: 'comment_time',
    by: 1
  },
  config: [
    {
      prop: 'audit',
      label: '审核',
      sort: false,
      type: 'audit',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'status',
      label: '审核状态',
      sort: true,
      type: 'status',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'content',
      label: '评论内容',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '600'
    },
    {
      prop: 'member_name',
      label: '发布人',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'comment_time',
      label: '发布时间',
      sort: true,
      type: 'time',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'thumbup_count',
      label: '点赞数',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '100'
    }
  ]
};
export const topicCommentManageTable = {
  maxHeight: '680',
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: 'comment_time',
    by: 1
  },
  config: [
    {
      prop: 'audit',
      label: '审核',
      sort: false,
      type: 'audit',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'status',
      label: '审核状态',
      sort: true,
      type: 'status',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'content',
      label: '评论内容',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '600'
    },
    {
      prop: 'member_name',
      label: '发布人',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '85'
    },
    {
      prop: 'comment_time',
      label: '发布时间',
      sort: true,
      type: 'time',
      fixed: false,
      minWidth: '105'
    },
    {
      prop: 'thumbup_count',
      label: '点赞数',
      sort: true,
      type: 'text',
      fixed: false,
      minWidth: '90'
    },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '100'
    }
  ]
};
export const studyPathTable ={
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 50,
    count: 0,
    order: 'created_time',
    by: 0
  },
  config:[{
    prop: 'name',
    label: '路径名称',
    sort: false,
    type: 'text',
    fixed: 'left',
    minWidth: '105'
  },{
    prop: 'status',
    label: '状态',
    sort: false,
    type: 'status',
    fixed: false,
    minWidth: '105',
  },{
    prop: 'thumbnail_img',
    label: '缩略图',
    sort: false,
    type: 'thumbnail_img',
    fixed: false,
    minWidth: '200'
  },{
    prop: 'purchased_count',
    label: '购买人数',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '100'
  },{
    prop: 'orgprice',
    label: '原价',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '100',
  },{
    prop: 'price',
    label: '现价',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '100',
  },{
    prop: 'discount_price',
    label: '优惠价格',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '100',
  },{
    prop: 'purchase_prompt',
    label: '优惠提示',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '150'
  },{
    prop: 'description',
    label: '描述',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '150'
  },{
    prop: 'tag',
    label: '标签',
    sort: false,
    type: 'text',
    fixed: false,
    minWidth: '125'
  },{
    prop: 'created_time',
    label: '创建时间',
    sort: false,
    type: 'created_time',
    fixed: false,
    minWidth: '105'
  },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '120'
    }]
};
export const storyCategoryTable = {
  tableData: [],
  table: {
    pageNum: 1,
    pageSize: 20,
    count: 0,
    order: 'created_time',
    by: 1
  },
  config: [
    {
      prop: 'id',
      label: '序号',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'title',
      label: '名称',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'course_name',
      label: '关联学习路径',
      sort: false,
      type: 'text',
      fixed: false,
      minWidth: '100'
    },
    {
      prop: 'status',
      label: '状态',
      sort: false,
      type: 'status',
      fixed: false,
      minWidth: ''
    },
    {
      prop: 'operation',
      label: '操作',
      type: 'operation',
      fixed: 'right',
      minWidth: '100'
    }
  ]
};
