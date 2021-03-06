const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layouts/default.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard'),
        meta: {
          title: '仪表盘',
          icon: 'el-icon-odometer',
          keepAlive: true
        }
      },
      {
        path: '/article',
        meta: { title: '文章管理', icon: 'el-icon-document' },
        component: () => import('@/views/Article'),
        children: [
          {
            path: '/article/create',
            component: () => import('@/views/Article/Editor'),
            hidden: false,
            meta: {
              title: '发表文章',
              keepAlive: true
            }
          },
          {
            path: '/article/edit/:id',
            component: () => import('@/views/Article/Editor'),
            hidden: true,
            props: true,
            meta: {
              title: '编辑文章',
              keepAlive: true
            }
          },
          {
            path: '/article/list',
            component: () => import('@/views/Article/List'),
            hidden: false,
            meta: {
              title: '文章列表',
              keepAlive: true
            }
          }
        ]
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('@/views/Category'),
        meta: {
          title: '分类管理',
          icon: 'el-icon-folder-opened',
          keepAlive: true
        }
      },
      {
        path: '/tag',
        name: 'Tag',
        component: () => import('@/views/Tag'),
        meta: {
          title: '标签管理',
          icon: 'el-icon-price-tag',
          keepAlive: true
        }
      },
      {
        path: '/file',
        name: 'File',
        component: () => import('@/views/File'),
        meta: {
          title: '文件管理',
          icon: 'el-icon-picture-outline',
          keepAlive: true
        }
      },
      {
        path: '/setting',
        name: 'Setting',
        meta: { title: '系统设置', icon: 'el-icon-setting' },
        component: () => import('@/views/Setting'),
        children: [
          {
            path: '/setting/profile',
            component: () => import('@/views/Setting/Profile.vue'),
            hidden: false,
            meta: {
              title: '个人信息',
              keepAlive: true
            }
          },
          {
            path: '/setting/option',
            component: () => import('@/views/Setting/Option.vue'),
            hidden: false,
            meta: {
              title: '站点配置',
              keepAlive: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound'),
    meta: {
      title: '404'
    }
  }
]

export default routes