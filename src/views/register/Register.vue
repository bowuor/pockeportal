<template>
  <div class="wrapper">
    <b-row>
      <b-col cols="12" lg="6">
        <b-card no-header>
          <template slot="header">
            School ID:  {{ $route.params.id }}
          </template>
          <b-table striped small fixed responsive="sm" :items="items($route.params.id)" :fields="fields">
            <template slot="value" slot-scope="data">
              <strong>{{data.item.value}}</strong>
            </template>
          </b-table>
          <template slot="footer">
            <b-button @click="goBack">Back</b-button>&nbsp;
            <b-button type="button" variant="success" @click="successModal = true" class="mr-1"> Edit School</b-button>
          </template>
        </b-card>
      </b-col>
    </b-row><b-modal title="Edit School" class="modal-success" size="lg" v-model="successModal" @ok="successModal = false" ok-variant="success">
      <b-card-body>
        <b-form>
          <b-row>
            <b-col sm="2">
              <b-form-group label="School Code" for="school-code" description="">
                <b-form-input type="text" id="school-code" placeholder="School Code"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group>
                <label for="school-name">School Name</label>
                <b-form-input type="text" id="school-name" placeholder="School Name"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                :label-cols="1"
                :horizontal="true">
                <label for="levelSelect">Level</label>
                <b-form-select id="levelSelect"
                  :plain="true"
                  :options="['Please select','Primary', 'Secondary', 'Tertiary/College']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            
          </b-row>
          <b-row>
            <b-col sm="5">
              <b-form-group validated label="Email *" label-for="normalEmail" description="">
                <b-form-input id="normalEmail" type="email" placeholder="Enter Email.." required tocomplete="email"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group>
                <label for="mobile">Mobile</label>
                <b-form-input type="text" id="mobile" placeholder="Mobile number" required></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                :label-cols="1"
                :horizontal="true">
                <label for="categorySelect">Category</label>
                <b-form-select id="categorySelect"
                  :plain="true"
                  :options="['Please select','Public', 'Private']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <b-form-group>
                <label for="address">Postal Address</label>
                <b-form-input type="text" id="address" placeholder="Enter box number"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group>
                <label for="postal-code">Postal Code</label>
                <b-form-input type="text" id="postal-code" placeholder="Postal Code"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group>
                <label for="city">City/Town</label>
                <b-form-input type="text" id="city" placeholder="Enter your city"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="3">
              <b-form-group>
                <label for="county">County</label>
                <b-form-input type="text" id="county" placeholder="County name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-card-body>
    </b-collapse>
  </b-card>
    </b-modal>
  </div>
</template>

<script>
import schoolsData from './SchoolsData'
export default {
  name: 'Register',
  props: {
    caption: {
      type: String,
      default: 'School code'
    },
  },
  data: () => {
    return {
      
    }
  },
  methods: {
  
  }
}
</script>
