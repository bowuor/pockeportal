<template>
  <div class="animated fadeIn">
    <b-card no-body class="card-accent-success">
      <b-card-header>
        <i class="fa fa-align-justify"></i>Products
        <!--<div class="card-header-actions">
          <a href="https://github.com/coreui/coreui-icons" rel="noreferrer noopener" target="_blank" class="card-header-action">
            <small class="text-muted">Register New School</small>
          </a>
        </div>-->
      </b-card-header>
      <b-card-body>
        <b-row class="text-center">
          <b-col lg="12">
            <b-form-group class="col-sm-4" label-for="find">
              <b-input-group>
                <b-input-group-prepend>
                  <b-input-group-text>Find</b-input-group-text>
                </b-input-group-prepend>
                <b-form-input id="find" type="text"></b-form-input>
              </b-input-group>
            </b-form-group>
            <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
              <template slot="id" slot-scope="data">
                {{data.item.id}}
              </template>
              <template slot="code" slot-scope="data">
                {{data.item.code}}
              </template>
              <template slot="name" slot-scope="data">
                {{data.item.name}}
              </template>
              <template slot="registered" slot-scope="data">
                {{data.item.registered}}
              </template>
              <template slot="street" slot-scope="data">
                {{data.item.street}}
              </template>
              <template slot="city" slot-scope="data">
                {{data.item.city}}
              </template>
              <template slot="postal-code" slot-scope="data">
                {{data.item.postalCode}}
              </template>
              <template slot="county" slot-scope="data">
                {{data.item.county}}
              </template>
              <template slot="email" slot-scope="data">
                {{data.item.email}}
              </template>
              <template slot="telephone" slot-scope="data">
                {{data.item.telephone}}
              </template>
              <template slot="mobile" slot-scope="data">
                {{data.item.mobile}}
              </template>
              <template slot="type" slot-scope="data">
                {{data.item.type}}
              </template>
              <template slot="status" slot-scope="data">
                <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
              </template>
            </b-table>
            <nav>
              <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
            </nav>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>

import itemsData from './ItemsData'
export default {
  name: 'Products',
  props: {
    caption: {
      type: String,
      default: 'Items'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      items: itemsData.filter((item) => item.id < 42),
      fields: [
        {key: 'id'},
        {key: 'code', sortable: true},
        {key: 'name', sortable: true},
        {key: 'registered'},
        {key: 'street'},
        {key: 'city'},
        {key: 'postal-code'},
        {key: 'county'},
        {key: 'email'},
        {key: 'telephone'},
        {key: 'mobile'},
        {key: 'type'},
        {key: 'status'}
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0
    }
  },
  computed: {
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    getRowCount (items) {
      return items.length
    },
    itemLink (code) {
      return `products/${code.toString()}`
    },
    rowClicked (item) {
      const itemLink = this.itemLink(item.code)
      this.$router.push({path: itemLink})
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>

</script>
