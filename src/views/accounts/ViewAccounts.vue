<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card no-body class="card-accent-success">
        <b-card-header>
          <i class="fa fa-align-justify"></i>Accounts
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
    <b-modal title="Add Student" class="modal-success" size="lg" v-model="successModal" @ok="successModal = false" ok-variant="success">
      <b-card-body>
        <b-form>
          <b-row>
            <b-col sm="4">
              <b-form-group label="Admission Number" for="admission-number" description="">
                <b-form-input type="text" id="admissionNumber" placeholder="Admission Number"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Date of Admission" for="doa" description="">
                <b-form-input type="date" id="doa" placeholder="doa"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group label="Pupil Identification Number" for="pin" description="">
                <b-form-input type="text" id="pin" placeholder="pin"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="surname">Surname</label>
                <b-form-input type="text" id="surname" placeholder="Surname"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="8">
              <b-form-group>
                <label for="other-names">Other Names</label>
                <b-form-input type="text" id="otherNames" placeholder="Other Names"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group label="Nationality" for="nationality" description="">
                <b-form-input type="text" id="nationality" placeholder="Kenyan"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
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
            <b-col sm="4">
              <b-form-group label="Date of birth" for="dob" description="">
                <b-form-input type="date" id="dob" placeholder="Date of birth"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-card-body>
    </b-modal>
  </div>
</template>
<script>

import studentsData from './StudentsData'
export default {
  name: 'Accounts',
  props: {
    caption: {
      type: String,
      default: 'Accounts'
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
      items: studentsData.filter((student) => student.id < 42),
      fields: [
        {key: 'id'},
        {key: 'adm_number', sortable: true},
        {key: 'surname', sortable: true},
        {key: 'other_names'},
        {key: 'registered'},
        {key: 'pin'},
        {key: 'birth_date'},
        {key: 'adm_date'},
        {key: 'gender'}
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 0,
      successModal: false,
      search: ""
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
    studentLink (adm_number) {
      return `accounts/${adm_number.toString()}`
    },
    rowClicked (item) {
      const studentLink = this.studentLink(item.adm_number)
      this.$router.push({path: studentLink})
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
