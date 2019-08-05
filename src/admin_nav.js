export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Registration',
      url: '/Register',
      icon: 'icon-user',
      children: [
        {
          name: 'User',
          url: '/register/registerUser',
          icon: 'icon-note'
        },
        {
          name: 'School',
          url: '/register/registerSchool',
          icon: 'icon-note'
        },
        {
          name: 'Account',
          url: '/register/registerAccount',
          icon: 'icon-note'
        },
        {
          name: 'Product',
          url: '/register/registerProduct',
          icon: 'icon-note'
        }
      ]
    },
    {
      title: true,
      name: 'MANAGE PERSONS',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people',
      
    },
    {
      name: 'Schools',
      url: '/schools',
      icon: 'icon-home',
    },
    {
      name: 'Accounts',
      url: '/accounts',
      icon: 'icon-wallet',
    },
    {
      name: 'Products',
      url: '/products',
      icon: 'icon-basket-loaded',
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
    },
    {
      name: 'Base',
      url: '/base',
      children: [
        {
          name: 'Cards',
          url: '/base/cards',
        },
        {
          name: 'Forms',
          url: '/base/forms'
        },
        {
          name: 'Switches',
          url: '/base/switches',
        },
        {
          name: 'Tables',
          url: '/base/tables',
        },
        {
          name: 'Tabs',
          url: '/base/tables',
        },
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
        },
        {
          name: 'Carousels',
          url: 'base/carousels',
        }
      ]
    }
  ]
}
