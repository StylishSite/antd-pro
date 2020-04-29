export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/login',
      },
    ],
  },
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/home',
          },
          {
            path: '/home',
            icon: 'smile',
            name: '首页',
            component: './Home',
          },
          {
            path: '/welcome',
            icon: 'smile',
            name: '欢迎',
            component: './Welcome',
          },
          {
            path: '/usermanage',
            icon: 'user',
            name: '用户管理',
            routes: [
              {
                path: '/usermanage/userList',
                icon: 'smile',
                name: '用户列表',
                component: './UserManage/userList/index',
              },
            ]
          },
          {
            path: '/express',
            icon: 'smile',
            name: '快递配置',
            routes: [
              {
                path: '/express/common',
                icon: 'smile',
                name: '通用快递',
                component: './ExpressManage/commonExpress/index',
              },
              {
                path: '/express/discount',
                icon: 'smile',
                name: '优惠快递',
                component: './ExpressManage/discountExpress/index',
              },
              {
                path: '/express/faceSheet',
                icon: 'smile',
                name: '面单配置',
                component: './ExpressManage/faceSheet/index',
              },
            ]
          },
          {
            path: '/manage',
            icon: 'setting',
            name: '基础管理',
            routes: [
              {
                path: '/manage/account',
                icon: 'team',
                name: '账号管理',
                component: './BasicManage/accountManage/index',
              },
              {
                path: '/manage/role',
                icon: 'user',
                name: '角色管理',
                component: './BasicManage/roleManage/index',
              },
              // {
              //   path: '/manage/operlog',
              //   icon: 'smile',
              //   name: '操作日志',
              //   component: './userList/index',
              // },
            ]
          },
          {
            path: '/account',
            icon: 'user',
            name: '帐号管理',
            routes: [
              {
                path: '/account/info',
                icon: 'smile',
                name: '帐号信息',
                component: './AccountManage/accountInfo/index',
              },
              {
                path: '/account/receiveAddress',
                icon: 'smile',
                name: '收件地址',
                component: './AccountManage/receiveAddress/index',
              },
            ]
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
