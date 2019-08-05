<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" lg="6">
          <b-card no-header>
            <template slot="header">
              Student ID:  {{ $route.params.id }}
            </template>
            <b-table striped small fixed responsive="sm" :items="items($route.params.id)" :fields="fields">
              <template slot="value" slot-scope="data">
                <strong>{{data.item.value}}</strong>
              </template>
            </b-table>
            <template slot="footer">
              <b-button @click="goBack">Back</b-button>&nbsp;
              <b-button type="button" variant="success" @click="successModal = true" class="mr-1"> Edit</b-button>
            </template>
          </b-card>
        </b-col>
      </b-row>  
    </div>
    <b-modal title="Edit Student" class="modal-success" size="lg" v-model="successModal" @ok="successModal = false" ok-variant="success">
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
//import studentsData from './StudentsData'
export default {
  name: 'Student',
  props: {
    caption: {
      type: String,
      default: 'Adm Number'
    },
  },
  data: () => {
    return {
      successModal: false,
      items: (adm) => {
        const student = studentsData.find( student => student.adm_number.toString() === adm)
        const studentDetails = student ? Object.entries(student) : [['student', 'Not found']]
        return studentDetails.map(([key, value]) => {return {key: key, value: value}})
      },
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],
    }
  },
 
  methods: {
    goBack() {
      this.$router.go(-1)
      //this.$router.replace({path: '/schools'})
    },
    edit() {


    },

  }
}
</script>
