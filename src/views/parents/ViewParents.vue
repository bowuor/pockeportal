<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card no-body class="card-accent-success">
        <b-card-header>
          <i class="fa fa-align-justify"></i>Parents
          <div class="card-header-actions">
            <a href="#" variant="success" @click="successModal = true" class="card-header-action">
              <small class="text-muted">Add Parent</small></a>
            <!--<a href="https://github.com/coreui/coreui-icons" rel="noreferrer noopener" target="_blank" class="card-header-action">
              <small class="text-muted">Register New School</small>
            </a>-->
          </div>
        </b-card-header>
        <b-card-body>
          <b-row class="text-center">
            <b-col lg="12">
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
    <b-modal title="Register Parent" class="modal-success" size="lg" v-model="successModal" @ok="successModal = false" ok-variant="success">
      <b-card-body>
        <b-form>
          <b-row>
            <b-col sm="2">
              <b-form-group label="ID Number" for="parent-id-number" description="">
                <b-form-input type="text" id="parentIdNumber" placeholder="ID/Passport Number"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group label="KRA Pin" for="kra" description="">
                <b-form-input type="text" id="kra" placeholder="KRA Pin Number"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group label="Mobile" for="mobile" description="">
                <b-form-input type="text" id="mobile" placeholder="Mobile number"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Nationality" for="nationality" description="">
                <b-form-input type="text" id="nationality" placeholder="Nationality"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group validated label="Email *" label-for="Email" description="">
                <b-form-input id="Email" type="email" placeholder="Enter Email.." required tocomplete="email"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group label="Postal address" for="postal-address" description="">
                <b-form-input type="text" id="postalAddress" placeholder="P.O box ..."></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="2">
              <b-form-group label="Postal code" for="postal-code" description="">
                <b-form-input type="text" id="postalCode" placeholder="Postal code"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group label="Town" for="town" description="">
                <b-form-input type="text" id="town" placeholder="Town"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="2">
              <b-form-group
                :label-cols="2">
                <label for="gender">Gender</label>
                <b-form-select id="gender"
                  :plain="true"
                  :options="['Please select','Male', 'Female']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            
          </b-row>
          <div class="form-actions">
            <b-button type="submit" variant="success">Add</b-button>
            <b-button type="reset" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-form>
      </b-card-body>
    </b-modal>
  </div>
</template>
<script>

import parentsData from './ParentsData'
export default {
  name: 'Parents',
  props: {
    caption: {
      type: String,
      default: 'Parents'
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
      items: parentsData.filter((parent) => parent.id < 42),
      fields: [
        //{key: 'id'},
        {key: 'id_number', sortable: true},
        {key: 'name', sortable: true},
        {key: 'mobile'},
        {key: 'KRA_pin'},
        {key: 'registered'},
        {key: 'nationality'},
        {key: 'address'},
        {key: 'postal-code'},
        {key: 'county'},
        {key: 'email'},
        {key: 'gender'}
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false
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
    parentLink (id_number) {
      return `parents/${id_number.toString()}`
    },
    rowClicked (item) {
      const parentLink = this.parentLink(item.id_number)
      this.$router.push({path: parentLink})
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
