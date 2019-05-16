import Vue from 'vue'
const _that = new Vue();

export const activityBgSearch = {
  config: {
    showList:[
      {
        type: 'select',
        prop: 'type',
        label: '广告类型',
        placeholder: '请选择广告类型',
        disabled: false,
        width: '150px',
        optList: [
          {
            label: '1x',
            value: 1
          },
          {
            label: '2x',
            value: 2
          },
          {
            label: '3x',
            value: 3
          }
        ],
        event: () => {
          _that.$bus.emit('activityBgSearch')
        },
      }
    ],
    hideList: [
      {
        type: 'text',
        prop: 'kw',
        label: '广告内容',
        placeholder: '请输入广告内容',
        disabled: false,
        width: '150px',
        event: () => {
          _that.$bus.emit('activityBgSearch')
        },
      }
    ]
  },
  searchValue: {
    showCondition: {
      type: 1
    },
    hideCondition: {
      kw: '666'
    }
  }
};

export const overviewContentSearch = {
  config: {
    showList:[
      {
        type: 'groupSelect',
        prop: 'catalogSection',
        label: _that.zzlLang.section,
        placeholder: _that.zzlLang.enterSection,
        disabled: false,
        width: '200px',
        optList: [],
        event: () => {
          _that.$bus.emit('overviewContentSearch')
        },
      }
    ],
    hideList: []
  },
  searchValue: {
    showCondition: {
      catalogSection: ''
    },
    hideCondition: {}
  }
};


export const storyManageSearch = {
  config: {
    showList:[
      {
        type: 'text',
        prop: 'kw',
        label: '发布人',
        placeholder: '请输入发布人',
        disabled: false,
        width: '150px',
        event: () => {
          _that.$bus.emit('storyManageSearch')
        },
      },
      {
        type: 'select',
        prop: 'status',
        label: '审核状态',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [
          { value: '', label: "请选择" },
          { value: 'P', label: "审核中" },
          { value: 'E', label: "审核失败" },
          { value: 'A', label: "审核通过" }
        ],
        event: () => {
          _that.$bus.emit('storyManageSearch')
        },
      },
      {
        type: 'select',
        prop: 'category_id',
        label: '故事分类',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [],
        event: () => {
          _that.$bus.emit('storyManageSearch')
        },
      },
      {
        type: 'select',
        prop: 'sticky',
        label: '是否置顶',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [
          { value: 2, label: "请选择" },
          { value: 1, label: "已置顶" },
          { value: 0, label: "未置顶" },
        ],
        event: () => {
          _that.$bus.emit('storyManageSearch')
        },
      },
      {
        type: 'daterange',
        prop: 'apply_date',
        label: '发布时间',
        startLabel: '开始日期',
        endLabel: '结束日期',
        placeholder: '请选择',
        disabled: false,
        width: '362px',
        event: () => {
          _that.$bus.emit('storyManageSearch')
        },
      },
      // {
      //   type: 'select',
      //   prop: 'tagname',
      //   label: '关联标签',
      //   placeholder: '请选择',
      //   disabled: false,
      //   width: '150px',
      //   optList: [],
      //   event: () => {
      //     _that.$bus.emit('storyManageSearch')
      //   },
      // }
    ],
    // hideList: [
    //   {
    //     type: 'text',
    //     prop: 'kw',
    //     label: '广告内容',
    //     placeholder: '请输入广告内容',
    //     disabled: false,
    //     width: '150px',
    //     event: () => {
    //       _that.$bus.emit('storyManageSearch')
    //     },
    //   }
    // ]
  },
  searchValue: {
    showCondition: {
      kw: "",
      status: '',
      category_id: 0,
      sticky: 2,
      apply_date: [],
      // tagname:'',
    },
    // hideCondition: {
    //   kw: '666'
    // }
  }
};

export const topicManageSearch = {
  config: {
    showList:[
      {
        type: 'text',
        prop: 'kw',
        label: '发布人',
        placeholder: '请输入发布人',
        disabled: false,
        width: '150px',
        event: () => {
          _that.$bus.emit('topicManageSearch')
        },
      },
      {
        type: 'select',
        prop: 'status',
        label: '审核状态',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [
          { value: '', label: "请选择" },
          { value: 'P', label: "审核中" },
          { value: 'E', label: "审核失败" },
          { value: 'A', label: "审核通过" }
        ],
        event: () => {
          _that.$bus.emit('topicManageSearch')
        },
      },
      {
        type: 'cascader',
        prop: 'section_list',
        label: '发布路径',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [],
        event: () => {
          _that.$bus.emit('topicManageSearch')
        },
      },
      {
        type: 'daterange',
        prop: 'apply_date',
        label: '发布时间',
        startLabel: '开始日期',
        endLabel: '结束日期',
        placeholder: '请选择',
        disabled: false,
        width: '362px',
        event: () => {
          _that.$bus.emit('topicManageSearch')
        },
      }
    ]
  },
  searchValue: {
    showCondition: {
      kw: "",
      status: '',
      section_list: [],
      apply_date: []
    }
  }
};

export const tagManageSearch = {
  config: {
    showList:[
      {
        type: 'text',
        prop: 'kw',
        label: '标签内容',
        placeholder: '请输入',
        disabled: false,
        width: '150px',
        event: () => {
          _that.$bus.emit('tagManageSearch')
        },
      },
      {
        type: 'select',
        prop: 'status',
        label: '发布分类',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [],
        event: () => {
          _that.$bus.emit('tagManageSearch')
        },
      },
      {
        type: 'daterange',
        prop: 'apply_date',
        label: '创建时间',
        startLabel: '开始日期',
        endLabel: '结束日期',
        placeholder: '请选择',
        disabled: false,
        width: '362px',
        event: () => {
          _that.$bus.emit('tagManageSearch')
        },
      },
      {
        type: 'daterange',
        prop: 'apply_date',
        label: '最新发布时间',
        startLabel: '开始日期',
        endLabel: '结束日期',
        placeholder: '请选择',
        disabled: false,
        width: '362px',
        event: () => {
          _that.$bus.emit('tagManageSearch')
        },
      }
    ]
  },
  searchValue: {
    showCondition: {
      kw: "",
      status: '',
      section_id: 0,
      apply_date: []
    }
  }
};

export const storyCommentManageSearch = {
  config: {
    showList:[
      {
        type: 'text',
        prop: 'kw',
        label: '发布人',
        placeholder: '请输入发布人',
        disabled: false,
        width: '150px',
        event: () => {
          _that.$bus.emit('storyCommentManageSearch')
        },
      },
      {
        type: 'select',
        prop: 'status',
        label: '审核状态',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [
          { value: '', label: "请选择" },
          { value: 'P', label: "审核中" },
          { value: 'E', label: "审核失败" },
          { value: 'A', label: "审核通过" }
        ],
        event: () => {
          _that.$bus.emit('storyCommentManageSearch')
        },
      },
      {
        type: 'daterange',
        prop: 'apply_date',
        label: '发布时间',
        startLabel: '开始日期',
        endLabel: '结束日期',
        placeholder: '请选择',
        disabled: false,
        width: '362px',
        event: () => {
          _that.$bus.emit('storyCommentManageSearch')
        },
      }
    ]
  },
  searchValue: {
    showCondition: {
      kw: "",
      status: '',
      apply_date: []
    }
  }
};
export const topicCommentManageSearch = {
  config: {
    showList:[
      {
        type: 'text',
        prop: 'kw',
        label: '发布人',
        placeholder: '请输入发布人',
        disabled: false,
        width: '150px',
        event: () => {
          _that.$bus.emit('topicCommentManageSearch')
        },
      },
      {
        type: 'select',
        prop: 'status',
        label: '审核状态',
        placeholder: '请选择',
        disabled: false,
        width: '150px',
        optList: [
          { value: '', label: "请选择" },
          { value: 'P', label: "审核中" },
          { value: 'E', label: "审核失败" },
          { value: 'A', label: "审核通过" }
        ],
        event: () => {
          _that.$bus.emit('topicCommentManageSearch')
        },
      },
      {
        type: 'daterange',
        prop: 'apply_date',
        label: '发布时间',
        startLabel: '开始日期',
        endLabel: '结束日期',
        placeholder: '请选择',
        disabled: false,
        width: '362px',
        event: () => {
          _that.$bus.emit('topicCommentManageSearch')
        },
      }
    ]
  },
  searchValue: {
    showCondition: {
      kw: "",
      status: '',
      apply_date: []
    }
  }
};
export const pathContentSearch = {
  config:{
    showList:[{
      type: 'text',
      prop: 'kw',
      label: '路径名称',
      placeholder: '请输入路径名称',
      disabled: false,
      width: '192px',
      optList:[],
      event: () => {
        _that.$bus.emit('pathContentSearch')
      },
    },{
      type: 'select',
      prop: 'status',
      label: '状态',
      placeholder: '请选择状态',
      disabled: false,
      width: '120px',
      optList: [{
        label:'请选择',
        value:''
      },{
        label:'已上架',
        value:'A'
      },{
        label:'已下架',
        value:'X'
      }],
      event: () => {
        _that.$bus.emit('pathContentSearch')
      },
    },{
      type: 'daterange',
      prop: 'created_time',
      label: '创建时间',
      startLabel:'开始日期',
      endLabel:'结束日期',
      placeholder: '',
      disabled: false,
      width: '362px',
      optList: [],
      event: () => {
        _that.$bus.emit('pathContentSearch')
      },
    }],
    hideList:[]
  },
  searchValue:{
    showCondition: {
      kw: '',
      status:'',
      created_time:[]
    },
    hideCondition: {}
  }
};

