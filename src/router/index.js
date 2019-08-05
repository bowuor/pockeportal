import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Register
const RegisterAccount = () => import('@/views/register/RegisterAccount')
const RegisterSchool = () => import('@/views/register/RegisterSchool')
const RegisterProduct = () => import('@/views/register/RegisterProduct')
const RegisterUser = () => import('@/views/register/RegisterUser')

//manage
const ViewSchools = () => import('@/views/schools/ViewSchools')
const ViewParents = () => import('@/views/parents/ViewParents')
const ViewAccounts = () => import('@/views/accounts/ViewAccounts')
//const ViewStudents = () => import('@/views/manage/ViewStudents')
const ViewProducts = () => import('@/views/products/ViewProducts')
const ViewUsers = () => import('@/views/manage/ViewUsers')

// Schools
const ViewSchool = () => import('@/views/schools/School')

// Parents
const RegisterParent = () => import('@/views/parents/RegisterParent')
const ViewParent = () => import('@/views/parents/Parent')

// Students
const RegisterStudent = () => import('@/views/accounts/RegisterAccount')
const ViewAccount = () => import('@/views/accounts/Account')

// Items
const ViewProduct = () => import('@/views/products/Product')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/Charts')
const Widgets = () => import('@/views/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const Flags = () => import('@/views/icons/Flags')
const FontAwesome = () => import('@/views/icons/FontAwesome')
const SimpleLineIcons = () => import('@/views/icons/SimpleLineIcons')
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const User = () => import('@/views/users/User')
const Users = () => import('@/views/users/Users')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'Register',
          meta: { label: 'Register'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'RegisterUser',
              meta: { label: 'User'},
              component: RegisterUser,
            },
            {
              path: 'RegisterSchool',
              meta: { label: 'School'},
              component: RegisterSchool,
            },
            {
              path: 'RegisterAccount',
              meta: { label: 'Account'},
              component: RegisterAccount,
            },
            {
              path: 'RegisterProduct',
              meta: { label: 'Product'},
              component: RegisterProduct,
            }
          ]
        },
        {
          path: 'Manage',
          meta: { label: 'Manage'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'ViewUsers',
              meta: { label: 'User'},
              component: ViewUsers,
            },
            {
              path: 'ViewSchools',
              meta: { label: 'School'},
              component: ViewSchools,
            },
            {
              path: 'ViewAccounts',
              meta: { label: 'Account'},
              component: ViewAccounts,
            },
          ]
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              meta: { label: 'Manage User'},
              component: Users,
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
            },
          ]
        },
        {
          path: 'schools',
          meta: { label: 'Manage Schools'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: ViewSchools,
            },
            {
              path: ':id',
              meta: { label: 'Details'},
              component: ViewSchool,
            },
          ]
        },
        {
          path: 'parents',
          meta: { label: 'Parents'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: ViewParents,
            },
            {
              path: ':id',
              meta: { label: 'Details'},
              component: ViewParent,
            },
          ]
        },
        {
          path: 'accounts',
          meta: { label: 'Accounts'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: ViewAccounts,
            },
            {
              path: ':id',
              meta: { label: 'Details'},
              component: ViewAccount,
            },
          ]
        },
        {
          path: 'products',
          meta: { label: 'Products'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: ViewProducts,
            },
            {
              path: ':id',
              meta: { label: 'Details'},
              component: ViewProduct,
            },
          ]
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'Theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'colors',
              name: 'Colors',
              component: Colors
            },
            {
              path: 'typography',
              name: 'Typography',
              component: Typography
            }
          ]
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'base',
          redirect: '/base/cards',
          name: 'Base',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'switches',
              name: 'Switches',
              component: Switches
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            },
            {
              path: 'tabs',
              name: 'Tabs',
              component: Tabs
            },
            {
              path: 'breadcrumbs',
              name: 'Breadcrumbs',
              component: Breadcrumbs
            },
            {
              path: 'carousels',
              name: 'Carousels',
              component: Carousels
            },
            {
              path: 'collapses',
              name: 'Collapses',
              component: Collapses
            },
            {
              path: 'jumbotrons',
              name: 'Jumbotrons',
              component: Jumbotrons
            },
            {
              path: 'list-groups',
              name: 'List Groups',
              component: ListGroups
            },
            {
              path: 'navs',
              name: 'Navs',
              component: Navs
            },
            {
              path: 'navbars',
              name: 'Navbars',
              component: Navbars
            },
            {
              path: 'paginations',
              name: 'Paginations',
              component: Paginations
            },
            {
              path: 'popovers',
              name: 'Popovers',
              component: Popovers
            },
            {
              path: 'progress-bars',
              name: 'Progress Bars',
              component: ProgressBars
            },
            {
              path: 'tooltips',
              name: 'Tooltips',
              component: Tooltips
            }
          ]
        },
        {
          path: 'buttons',
          redirect: '/buttons/standard-buttons',
          name: 'Buttons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'standard-buttons',
              name: 'Standard Buttons',
              component: StandardButtons
            },
            {
              path: 'button-groups',
              name: 'Button Groups',
              component: ButtonGroups
            },
            {
              path: 'dropdowns',
              name: 'Dropdowns',
              component: Dropdowns
            },
            {
              path: 'brand-buttons',
              name: 'Brand Buttons',
              component: BrandButtons
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: 'Icons',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'coreui-icons',
              name: 'CoreUI Icons',
              component: CoreUIIcons
            },
            {
              path: 'flags',
              name: 'Flags',
              component: Flags
            },
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'badges',
              name: 'Badges',
              component: Badges
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
