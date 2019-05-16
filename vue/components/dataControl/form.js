/*----
  form多的话可以分文件写
----*/
import Vue from 'vue'
const _that = new Vue();

// 验证手机号
function validMobilePhoneNo (rule, value, callback) {
  if (value) {
    let emailReg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
    if (emailReg.test(userManageAddUpdate.form.mobileNumber)) {
      callback();
    } else {
      callback(new Error(_that.zzlLang.mobilePhoneFormatIsIncorrect));
    }
  } else {
    callback();
  }
}

// 验证邮箱
function validEmail(rule, value, callback) {
  if (value) {
    let emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    if (emailReg.test(userManageAddUpdate.form.emailAddr)) {
      callback();
    } else {
      callback(new Error(_that.zzlLang.emailError));
    }
  } else {
    callback();
  }
}

// 密码长度为5 ~ 13位 密码必须由字母和数字组成
function validNumber (rule, value, callback) {
  if (value) {
    if (value.length < 5 || value.length > 13){
      callback(new Error(_that.zzlLang.passWordLengthLimit));
    }
    let reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/)
    if (reg.test(value)) {
      callback();
    } else {
      callback(new Error(_that.zzlLang.passwordRuleLimit));
    }
  } else {
    callback();
  }
}

// 大于零
function thenZero(rule, value, callback) {
  if (value) {
    if (value <= 0) {
      callback(new Error(_that.zzlLang.thenZero));
    } else {
      callback();
    }
  } else {
    callback();
  }
}

// 修改密码的form验证
const validUpdatePassword = {
  // 两次密码不一致
  validRePassWord: (rule, value, callback) => {
    if (value) {
      if (updatePassword.form.newPassWord === updatePassword.form.rePassWord) {
        callback();
      } else {
        callback(new Error(_that.zzlLang.bothPasswordNotSame));
      }
    }
  }
};

// 修改密码的form
export const updatePassword = {
  form: {
    oldPassWord: '',
    newPassWord: '',
    rePassWord: '',
  }, // 表单数据
  rules: {
    oldPassWord: [
      { required: true, message: _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    newPassWord: [
      { required: true, message: _that.zzlLang.canNotEmpty, trigger: 'blur' },
      { required: true, trigger: 'blur', validator: validNumber }
    ],
    rePassWord: [
      { required: true, message: _that.zzlLang.canNotEmpty, trigger: 'blur' },
      { required: true, trigger: 'blur', validator: validUpdatePassword.validRePassWord }
    ]
  }, // 验证规则
  config: {
    formItemList: [
      {
        type: 'password',
        prop: 'oldPassWord',
        label: _that.zzlLang.oldPassWord,
        placeholder: _that.zzlLang.enterOldPassWord,
        disabled: false,
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        event: () => {}
      },
      {
        type: 'password',
        prop: 'newPassWord',
        label: _that.zzlLang.newPassWord,
        placeholder: _that.zzlLang.enterNewPassWord + _that.zzlLang.passWordLengthLimit,
        disabled: false,
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        event: () => {}
      },
      {
        type: 'password',
        prop: 'rePassWord',
        label: _that.zzlLang.rePassWord,
        placeholder: _that.zzlLang.enterRePassWord + _that.zzlLang.passWordLengthLimit,
        disabled: false,
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        event: () => {}
      }
    ]
  }, // form表单的各项
};

// 修改密码的form验证
const validUserManageAddUpdate = {
  // 两次密码不一致
  validRePassWord: (rule, value, callback) => {
    if (value) {
      if (userManageAddUpdate.form.newPwd === userManageAddUpdate.form.reNewPwd) {
        callback();
      } else {
        callback(new Error(_that.zzlLang.bothPasswordNotSame));
      }
    } else {
      callback();
    }
  }
};

// 用户添加修改的form
export const userManageAddUpdate = {
  form: {
    nickName: '',
    roles: [],
    userName: '',
    emailAddr: '',
    mobileNumber: '',
    newPwd: '',
    reNewPwd: '',
    description: '',
    instid: ''
  },
  rules: {
    nickName: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    userName: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    emailAddr: [
      { required: false, trigger: 'blur', validator: validEmail}
    ],
    mobileNumber: [
      { required: false, trigger: 'blur', validator: validMobilePhoneNo}
    ],
    newPwd: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur'},
      { trigger: 'blur', validator: validNumber}
    ],
    reNewPwd: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur'},
      { trigger: 'blur', validator: validUserManageAddUpdate.validRePassWord }
    ],
    roles: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'change' }
    ]
  }, // 用户的form规则
  config: {
    formItemList: [
      {
        type: 'text',
        prop: 'nickName',
        label: _that.zzlLang.nickName,
        placeholder: _that.zzlLang.enterNickName,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'text',
        prop: 'userName',
        label: _that.zzlLang.userName,
        placeholder: _that.zzlLang.enterUserName,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'text',
        prop: 'emailAddr',
        label: _that.zzlLang.email,
        placeholder: _that.zzlLang.enterEmail,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'text',
        prop: 'mobileNumber',
        label: _that.zzlLang.mobilePhoneNo,
        placeholder: _that.zzlLang.enterMobilePhoneNo,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'password',
        prop: 'newPwd',
        label: _that.zzlLang.newPassWord,
        placeholder: _that.zzlLang.enterNewPassWord,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'password',
        prop: 'reNewPwd',
        label: _that.zzlLang.rePassWord,
        placeholder: _that.zzlLang.enterRePassWord,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'multipleSelect',
        prop: 'roles',
        label: _that.zzlLang.role,
        placeholder: _that.zzlLang.enterRole,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        optList: [],
        event: () => {}
      },
      {
        type: 'textarea',
        prop: 'description',
        label: _that.zzlLang.note,
        placeholder: _that.zzlLang.enterNote,
        disabled: false,
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        event: () => {}
      }
    ]
  }, // form表单的各项
};

// 广告管理-添加修改的form
export const activityBgAddUpdate = {
  form: {
    // name: '',
    // action: '',
    // actiontp: 'link',
    bannertype: '',
    bannerwidth: '',
    bannerheight: '',
    bannerdata: [],
    description: '',
  },
  rules: {
    // name: [
    //   { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    // ],
    // action: [
    //   { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    // ],
    // actiontp: [
    //   { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'change' }
    // ],
    bannertype: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    bannerwidth: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
      { trigger: 'blur', validator: thenZero }
    ],
    bannerheight: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
      { trigger: 'blur', validator: thenZero }
    ],
    bannerdata: [
      { required: false, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    description: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
  },
  config: {
    formItemList: [
      {
        type: 'text',
        prop: 'bannertype',
        label: _that.zzlLang.type,
        placeholder: _that.zzlLang.enterType,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'number',
        prop: 'bannerwidth',
        label: _that.zzlLang.picWidth,
        placeholder: _that.zzlLang.enterPicWidth,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'number',
        prop: 'bannerheight',
        label: _that.zzlLang.picHeight,
        placeholder: _that.zzlLang.enterPicHeight,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'textarea',
        prop: 'description',
        label: _that.zzlLang.describe,
        placeholder: _that.zzlLang.enterDescribe,
        disabled: false,
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        event: () => {}
      },
      {
        type: 'bannerdata',
        prop: 'bannerdata',
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        bannerdata:
          [
            [
              {
                type: 'text',
                prop: 'name',
                label: _that.zzlLang.name,
                placeholder: _that.zzlLang.enterName,
                disabled: false,
                grid: {
                  xs: 24,
                  sm: 8,
                  md: 8,
                  lg: 8,
                  xl: 8,
                },
                event: () => {},
                width: '33%'
              },
              {
                type: 'text',
                prop: 'action',
                label: _that.zzlLang.associationLink,
                placeholder: _that.zzlLang.enterAssociationLink,
                disabled: false,
                grid: {
                  xs: 24,
                  sm: 8,
                  md: 8,
                  lg: 8,
                  xl: 8,
                },
                event: () => {},
                width: '33%'
              },
              {
                type: 'radioGroup',
                prop: 'actiontp',
                label: _that.zzlLang.associationLinkType,
                placeholder: _that.zzlLang.enterAssociationLink,
                disabled: false,
                grid: {
                  xs: 24,
                  sm: 8,
                  md: 8,
                  lg: 8,
                  xl: 8,
                },
                optList: [
                  {
                    label: 'static',
                    value: '静态'
                  },
                  {
                    label: 'link',
                    value: '动态'
                  },
                ],
                event: () => {},
                width: '33%'
              },
              {
                type: 'upload',
                prop: 'upload',
                label: _that.zzlLang.uploadImgText,
                placeholder: _that.zzlLang.limit10,
                disabled: false,
                grid: {
                  xs: 24,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                },
                event: () => {},
                width: '50%'
              }
            ]
          ]
      }
    ]
  }
};

export const contentColumnsForm = {
  form:{
    title:'',
    code:'',
    sub_title:'',
    display:'1'
  },
  rules:{
    title:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    sub_title:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    code:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    display:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
  },
  config:{
    formItemList:[{
      type: 'text',
      prop: 'title',
      label: _that.zzlLang.name,
      placeholder: _that.zzlLang.enterName,
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {}
    },{
      type: 'text',
      prop: 'code',
      label: _that.zzlLang.codeName,
      placeholder: _that.zzlLang.enterCodeName,
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {}
    },{
      type: 'text',
      prop: 'sub_title',
      label: _that.zzlLang.sort,
      placeholder: _that.zzlLang.enterSort,
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'select',
      prop: 'display',
      label: _that.zzlLang.isShow,
      placeholder: _that.zzlLang.enterIsShow,
      disabled: false,
      optList:[{label:_that.zzlLang.yes,value:'1'},{label:_that.zzlLang.no,value:'0'}],
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {}
    }]
  }
};

// 广告管理-学习权限节的添加修改form
export const permissionsSectionAddUpdate = {
  form: {
    title: '',
    unlockcond_id: '',
    isfree: '0',
    allow_topic: 'N'
  },
  rules: {
    title: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    unlockcond_id: [
      { required: false, message:  _that.zzlLang.canNotEmpty, trigger: 'change' }
    ],
    isfree: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'change' }
    ],
    allow_topic: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'change' }
    ]
  },
  config: {
    formItemList: [
      {
        type: 'text',
        prop: 'title',
        label: _that.zzlLang.sectionName,
        placeholder: _that.zzlLang.enterSectionName,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'select',
        prop: 'isfree',
        label: _that.zzlLang.isFree,
        placeholder: _that.zzlLang.enterIsFree,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        optList: [],
        event: () => {}
      },
      {
        type: 'groupSelect',
        prop: 'unlockcond_id',
        label: _that.zzlLang.frontSteps,
        placeholder: _that.zzlLang.enterFrontSteps,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        optList: [],
        event: () => {}
      },
      {
        type: 'select',
        prop: 'allow_topic',
        label: _that.zzlLang.allowTopic,
        placeholder: _that.zzlLang.enterAllowTopic,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        optList: [],
        event: () => {}
      }
    ]
  }
};

// 学习内容-类型添加修改
export const dialogTypeAddUpdate = {
  form: {
    title: '',
    thumbnail_img: '',
    banner_img: '',
    course_credit: '1',
    failtest_credit: '1',
    question_number: '5',
    brief: '',
    media_url: '', // 视频链接
    content: '', // 图文内容
    description: ''
  },
  rules: {
    title: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    thumbnail_img: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    course_credit: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    failtest_credit: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    question_number: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    brief: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    description: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    media_url: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ],
    content: [
      { required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' }
    ]
  },
  config: {
    formItemList: [
      {
        type: 'text',
        prop: 'title',
        label: _that.zzlLang.studyName,
        placeholder: _that.zzlLang.enterStudyName + '至多400字',
        maxlength: 225,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'text',
        prop: 'brief',
        label: _that.zzlLang.introduction,
        placeholder: _that.zzlLang.enterIntroduction + '至多2000字',
        maxlength: 2000,
        disabled: false,
        grid: {
          xs: 24,
          sm: 16,
          md: 16,
          lg: 16,
          xl: 16,
        },
        optList: [],
        event: () => {}
      },
      {
        type: 'number',
        prop: 'course_credit',
        label: _that.zzlLang.completeStudy,
        placeholder: _that.zzlLang.enterCompleteStudy,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        optList: [],
        event: () => {}
      },
      {
        type: 'number',
        prop: 'failtest_credit',
        label: _that.zzlLang.noCompleteStudy,
        placeholder: _that.zzlLang.enterNoCompleteStudy,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        optList: [],
        event: () => {}
      },
      {
        type: 'number',
        prop: 'question_number',
        label: _that.zzlLang.questionNumber,
        placeholder: _that.zzlLang.enterQuestionNumber,
        noShow: false,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        optList: [],
        event: () => {}
      },
      {
        type: 'text',
        prop: 'media_url',
        label: _that.zzlLang.videoLink,
        placeholder: _that.zzlLang.enterVideoLink,
        noShow: true,
        disabled: false,
        grid: {
          xs: 24,
          sm: 8,
          md: 8,
          lg: 8,
          xl: 8,
        },
        event: () => {}
      },
      {
        type: 'textarea',
        prop: 'description',
        label: _that.zzlLang.describe,
        placeholder: _that.zzlLang.enterDescribe + '至多225字',
        maxlength: 225,
        disabled: false,
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        event: () => {}
      },
      {
        type: 'upload',
        prop: 'thumbnail_img',
        label: _that.zzlLang.upload,
        placeholder: _that.zzlLang.limit100,
        disabled: false,
        imgWidth: 690,
        imgHeight: 394,
        grid: {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 12,
        },
        event: () => {}
      },
      {
        type: 'content',
        prop: 'content',
        label: _that.zzlLang.graphic,
        placeholder: _that.zzlLang.enterGraphic,
        noShow: true,
        disabled: false,
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        event: () => {}
      }
    ]
  }
};

// 题目-增加和修改
export const questionAddUpdate = {

};


//学习路径的添加修改
export const studyPathForm = {
  form:{
    name:'',
    tag:'',
    status:'A',
    orgprice:0,
    price:0,
    discount_price:0,
    purchase_prompt:'',
    description:'',
    thumbnail_img:''
  },
  rules:{
    name:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    tag:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    status:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    orgprice:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    price:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
  },
  config:{
    formItemList:[{
      type: 'text',
      prop: 'name',
      label: '路径名称',
      placeholder: '请输入路径名称',
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'text',
      prop: 'orgprice',
      label: '原价',
      placeholder: '请输入原价',
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'text',
      prop: 'price',
      label: '现价',
      placeholder: '请输入现价',
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'select',
      prop: 'status',
      label: '状态',
      placeholder: '请选择状态',
      optList:[{
        label:'已上架',
        value:'A'
      },{
        label:'已下架',
        value:'X'
      }],
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'text',
      prop: 'tag',
      label: '标签',
      placeholder: '请输入标签(多个以逗号隔开)',
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'text',
      prop: 'discount_price',
      label: '优惠价格',
      placeholder: '请输入优惠价格',
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'textarea',
      prop: 'purchase_prompt',
      label: '优惠提醒',
      placeholder: '请输入优惠提醒',
      disabled: false,
      grid: {
        xs: 24,
      },
      event: () => {},
    },{
      type: 'textarea',
      prop: 'description',
      label: '描述',
      placeholder: '请输入描述',
      disabled: false,
      grid: {
        xs: 24,
      },
      event: () => {},
    },{
      type: 'upload',
      prop: 'thumbnail_img',
      listType:'picture',
      imgWidth:709,
      imgHeight:300,
      limit:1,
      uploadName:'上传缩略图',
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    }]
  }
};

// 评论
export const storyCommentComponent = {
  form: {},
  rules: {},
  config: {
    formItemList: [
      {
        type: 'bannerdata',
        prop: 'bannerdata',
        grid: {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24,
          xl: 24,
        },
        bannerdata:[
          {
            type: 'textarea',
            prop: 'description',
            label: '',
            placeholder: _that.zzlLang.enterDescribe,
            disabled: true,
            grid: {
              xs: 24,
              sm: 24,
              md: 24,
              lg: 24,
              xl: 24,
            },
            event: () => {}
          },
        ]
      }
    ]
  }
};
// 故事分类
export const storyCategoryForm = {
  form:{
    title:'',
    status:'A',
    course_id:0,
  },
  rules:{
    title:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'blur' },
    status:{ required: true, message:  _that.zzlLang.canNotEmpty, trigger: 'change' },
  },
  config:{
    formItemList:[{
      type: 'text',
      prop: 'title',
      label: '故事名称',
      placeholder: '请输入故事名称',
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'select',
      prop: 'status',
      label: '状态',
      placeholder: '请选择状态',
      optList:[{
        label:'已上架',
        value:'A'
      },{
        label:'已下架',
        value:'X'
      }],
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    },{
      type: 'select',
      prop: 'course_id',
      label: '关联学习路径',
      placeholder: '请选择关联学习路径',
      optList:[{
        label:'请选择关联学习路径',
        value:0
      },{
        label:'已上架',
        value:'A'
      },{
        label:'已下架',
        value:'X'
      }],
      disabled: false,
      grid: {
        xs: 24,
        sm: 8,
        md: 8,
        lg: 8,
        xl: 8,
      },
      event: () => {},
    }]
  }
};
