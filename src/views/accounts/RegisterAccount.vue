<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show" class="card-accent-success">
            <div slot="header">
              <i class="fa fa-edit"></i> New Student Registration
              <!-- <div class="card-header-actions"> -->
                <!-- <b-link href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </b-link> -->
                <!--<b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link> -->
                <!-- <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link> -->
              <!-- </div> -->
            </div>
            <b-card-body>
              <b-form>
                <b-row>
                  <b-col sm="3">
                    <b-form-group  label="First Name" for="firstName" description="">
                      <b-form-input type="text" id="firstName" placeholder="First Name"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group  label="Middle Name" for="middleName" description="">
                      <b-form-input type="text" id="middleName" placeholder="Middle Name(s)"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group  label="Last Name" for="lastName" description="">
                      <b-form-input type="text" id="lastName" placeholder="Last Name"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col sm="2">
                    <b-form-group label="Parent ID Number" for="parent-id-number" description="">
                      <b-form-input type="text" id="parentIdNumber" placeholder="ID/Passport Number"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="2">
                    <b-form-group label="KRA Pin" for="kra" description="">
                      <b-form-input type="text" id="kra" placeholder="KRA Pin Number"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="2">
                    <b-form-group label="Mobile" for="mobile" description="">
                      <b-form-input type="text" id="mobile" placeholder="Mobile number"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="2">
                    <b-form-group label="Alternative Mobile" for="alt-mobile" description="">
                      <b-form-input type="text" id="altMobile" placeholder="Alternative Mobile number"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="4">
                    <b-form-group label="Nationality" for="nationality" description="">
                      <b-form-input type="text" id="nationality" placeholder="Kenyan"></b-form-input>
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
                  <b-col sm="3">
                    <b-form-group label="Admission Number" for="admission-number" description="">
                      <b-form-input type="text" id="admissionNumber" placeholder="Admission Number"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group>
                      <label for="surname">Surname</label>
                      <b-form-input type="text" id="surname" placeholder="Surname"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group>
                      <label for="other-names">Other Names</label>
                      <b-form-input type="text" id="otherNames" placeholder="Other Names"></b-form-input>
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
                  <b-col sm="3">
                    <b-form-group label="Pupil Identification Number" for="pin" description="">
                      <b-form-input type="text" id="pin" placeholder="pin"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group label="Date of birth" for="dob" description="">
                      <b-form-input type="date" id="dob" placeholder="Date of birth"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group label="Date of Admission" for="doa" description="">
                      <b-form-input type="date" id="doa" placeholder="doa"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="form-actions">
                  <b-button type="submit" variant="success">Add</b-button>
                  <b-button type="reset" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                </div>
              </b-form>
            </b-card-body>
          </b-card>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'registerSchool',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      firstName:'',
      middleName:'',
      lastName: '',
      parentIdNumber: '',
      kra: '',
      mobile: '',
      altMobile: '',
      nationality: '',
      Email: '',
      postalAddress: '',
      postalCode: '',
      town: '',
      admissionNumber: '',
      surname: '',
      otherNames: '',
      gender: '',
      dob: '',
      doa: ''
    }
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
