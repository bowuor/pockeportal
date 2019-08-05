export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Students',
      url: '/students',
      icon: 'icon-people',
      children: [
        {
          name: 'View Students',
          url: '/students',
          icon: 'icon-list'
        },
        {
          name: 'Register Student',
          url: '/students/register/registerStudent',
          icon: 'icon-note'
        }
      ]
    },
    {
      name: 'Items',
      icon: 'icon-people',
      children: [
        {
          name: 'View Items',
          url: '/items',
          icon: 'icon-list'
        },
        {
          name: 'Register Item',
          url: '/items/registerItem',
          icon: 'icon-note'
        }
      ]
    },
    {
      title: true,
      name: 'Reports',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Transactions',
      icon: 'icon-list',
      children: [
        {
          name: 'Card Payments',
          url: '/reports/payments',
          icon: 'icon-layers'
        },
        {
          name: 'Card Top-ups',
          url: '/reports/top-ups',
          icon: 'icon-layers'
        },
        {
          name: 'Merchant Settlement',
          url: '/reports/settlement',
          icon: 'icon-layers'
        }
      ]
    },
    {
      name: 'Records',
      icon: 'icon-list',
      children: [
        {
          name: 'Cards',
          // url: '/reports/payments',
          icon: 'icon-layers'
        },
        {
          name: 'Terminals',
          // url: '/reports/top-ups',
          icon: 'icon-layers'
        }
      ]
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
