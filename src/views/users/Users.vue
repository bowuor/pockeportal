<template>
  <b-row>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card no-body class="card-accent-success">
        <b-card-header>
          <i class="fa fa-align-justify"></i>Users
        </b-card-header>
        <b-card-body>
          <b-form-group class="col-sm-4" label-for="find">
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text>Find</b-input-group-text>
              </b-input-group-prepend>
              <b-form-input id="find" type="text"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage" @row-clicked="rowClicked">
            <template slot="idNumber" slot-scope="data">
              {{data.item.idNumber}}
            </template>
            <template slot="surname" slot-scope="data">
              {{data.item.surname}}
            </template>
            <template slot="status" slot-scope="data">
              <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
            </template>
          </b-table>
          <nav>
            <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
          </nav>
        </b-card-body>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'Users',
  props: {
    caption: {
      type: String,
      default: '<i class="fa fa-align-justify"></i> Users'
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
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      items: usersData.filter((user) => user.idNumber > 0),
      fields: [
        {key: 'idNumber'},
        {key: 'surname', sortable: true},
        {key: 'otherNames'},
        {key: 'email'},
        {key: 'mobile'},
        {key: 'registered'},
        {key: 'role'},
        {key: 'status'}
      ],
      currentPage: 1,
      perPage: 6,
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
    userLink (idNumber) {
      return `users/${idNumber.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.idNumber)
      this.$router.push({path: userLink})
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
