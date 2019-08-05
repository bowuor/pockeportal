<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show" class="card-accent-success">
            <div slot="header">
              <i class="fa fa-edit"></i> Account Opening
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-row>
                  <div class="container" style="padding: 10px">
                    <ul class="progressbar">
                      <li class="active"> Parent Info </li>
                      <li> Student Info </li>
                      <li> Confirm </li>
                    </ul>
                  </div>
                </b-row>
                <b-form>
                  <div v-show="step === 1">
                    <b-row>
                      <b-col sm="3">
                        <b-form-group label-for="parentIdNumber" description="ID/Passport Number">
                          <b-input-group>
                            <b-form-input id="parentIdNumber" type="text" v-model="registration.parentIdNumber"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="3">
                        <b-form-group label-for="parentSurname" description="Surname">
                          <b-input-group>
                            <b-form-input id="parentSurname" type="text" v-model="registration.parentSurname"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                      <b-col sm="5">
                        <b-form-group label-for="otherNames" description="Other Names">
                          <b-input-group>
                            <b-form-input id="parentName" type="text" v-model="registration.otherNames"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="3">
                        <b-form-group label-for="Mobile" description="Mobile">
                          <b-input-group>
                            <b-form-input type="text" id="mobile" v-model="registration.mobile"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                      <b-col sm="5">
                        <b-form-group validated label-for="Email" description="Email">
                          <b-input-group>
                            <b-form-input id="Email" type="email" required tocomplete="email" v-model="registration.email"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="4">
                        <b-form-group label-for="Nationality" description="Nationality">
                          <b-input-group>
                            <b-form-input type="text" id="nationality" v-model="registration.nationality"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                      <b-col sm="4">
                        <b-form-group
                          :label-cols="2" label-for="Gender" description="Gender">
                          <b-input-group>
                            <b-form-select id="gender" v-model="registration.parentGender"
                              :plain="true"
                              :options="['Please select','Male', 'Female']"
                              value="Please select">
                            </b-form-select>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="3">
                        <b-form-group label-for="postalAddress" description="Postal address">
                          <b-input-group>
                            <b-form-input type="text" id="postalAddress" v-model="registration.postalAddress"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                      <b-col sm="2">
                        <b-form-group label-for="postalCode" description="Postal code">
                          <b-input-group>
                            <b-form-input type="text" id="postalCode" v-model="registration.postalCode"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                      <b-col sm="3">
                        <b-form-group label-for="Town" description="Town">
                          <b-input-group>
                            <b-form-input type="text" id="town" v-model="registration.town"></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <div style="float: right; padding: 4px;">
                      <b-button variant="success" @click.prevent="next()"> Next </b-button>
                    </div>
                  </div>
                  <div v-show="step === 2">
                    <b-row>
                      <b-form-group description="">
                        <b-input-group>

                        </b-input-group>
                      </b-form-group>
                    </b-row>
                    <b-row>
                      <b-col sm="3">
                        <b-form-group label-for="Admission Number" description="Admission number">
                          <b-input-group>
                            <b-form-input type="text" id="admissionNumber" ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </b-col>
                      <b-col sm="3">
                        <b-form-group label-for="Pupil Identification Number" description="pupil Identification Number">
                          <b-form-input type="text" id="pin" ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="3">
                        <b-form-group label-for="Surname" description="Surname">
                          <b-form-input type="text" id="surname" ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col sm="5">
                        <b-form-group label-for="otherNames" description="Other names">
                          <b-form-input type="text" id="otherNames" ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="2">
                        <b-form-group type="text" description="Gender">
                          <b-form-select id="gender"
                            :plain="true"
                            :options="['Please select','Male', 'Female']"
                            value="Please select">
                          </b-form-select>
                        </b-form-group>
                      </b-col>
                      <b-col sm="3">
                        <b-form-group label-for="dob" description="Date of birth">
                          <b-form-input type="date" id="dob" placeholder="Date of birth"></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col sm="3">
                        <b-form-group label-for="doa" description="Date of Admission">
                          <b-form-input type="date" id="doa" ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="6">
                        <b-button variant="success" @click.prevent="prev()"> Previous </b-button>&nbsp
                      </b-col>
                      <b-col sm="6">
                        <div style="float: right">
                          <b-button variant="success" @click.prevent="next()"> Next </b-button>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                  <div v-show="step === 3">
                    <div>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group label-for="parentIdNumber" description="ID/Passport Number">
                            <b-input-group>
                              {{registration.parentIdNumber}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group label-for="parentSurname" description="Surname">
                            <b-input-group>
                              {{registration.parentSurname}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                        <b-col sm="5">
                          <b-form-group label-for="otherNames" description="Other Names">
                            <b-input-group>
                              {{registration.otherNames}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group label-for="Mobile" description="Mobile">
                            <b-input-group>
                              {{registration.mobile}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                        <b-col sm="5">
                          <b-form-group validated label-for="Email" description="Email">
                            <b-input-group>
                              {{registration.email}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group label-for="Nationality" description="Nationality">
                            <b-input-group>
                              {{registration.nationality}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                        <b-col sm="5">
                          <b-form-group label-for="Gender" description="Gender">
                            <b-input-group>
                              {{registration.parentGender}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group label-for="postalAddress" description="Postal address">
                            <b-input-group>
                              {{registration.postalAddress}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                        <b-col sm="2">
                          <b-form-group label-for="postalCode" description="Postal code">
                            <b-input-group>
                              {{registration.postalCode}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                        <b-col sm="3">
                          <b-form-group label-for="Town" description="Town">
                            <b-input-group>
                              {{registration.town}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-form-group description="">
                          <b-input-group>

                          </b-input-group>
                        </b-form-group>
                      </b-row>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group label-for="Admission Number" description="Admission number">
                            <b-input-group>
                              {{registration.admissionNumber}}
                            </b-input-group>
                          </b-form-group>
                        </b-col>
                        <b-col sm="3">
                          <b-form-group label-for="Pupil Identification Number" description="pupil Identification Number">
                            {{registration.pin}}
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group label-for="Surname" description="Surname">
                            {{registration.studentSurname}}
                          </b-form-group>
                        </b-col>
                        <b-col sm="5">
                          <b-form-group label-for="otherNames" description="Other names">
                            {{registration.studentOthernames}}
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col sm="3">
                          <b-form-group type="text" description="Gender">
                            {{registration.studentGender}}
                          </b-form-group>
                        </b-col>
                        <b-col sm="3">
                          <b-form-group label-for="dob" description="Date of birth">
                            {{registration.studentDateOfBirth}}
                          </b-form-group>
                        </b-col>
                        <b-col sm="3">
                          <b-form-group label-for="doa" description="Date of Admission">
                            {{registration.studentDateOfAdmission}}
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </div>
                    <div class="form-actions">
                      <b-button variant="success" @click.prevent="prev()"> Previous </b-button>&nbsp
                      <b-button type="submit" @click.prevent="submit()" variant="success"> Submit </b-button>&nbsp
                      <b-button type="reset" variant="danger"><i class="fa fa-ban"></i> Reset </b-button>
                    </div>
                  </div>
                </b-form>
              </b-card-body>
            </b-collapse>
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
      step:1,
      registration:{
        parentIdNumber :"",
        parentSurname : "",
        otherNames :"",
        mobile : "",
        email : "",
        nationality : "",
        parentGender : "",
        postalAddress : "",
        postalCode : "",
        town : "",
        admissionNumber : "",
        pin : "",
        studentSurname : "",
        studentOthernames : "",
        studentGender : "",
        studentDateOfBirth : "",
        studentDateOfAdmission : "",
      }
    }
  },
  methods: {
    click () {
      // do nothing
    },
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      alert('Submit to blah and show blah and etc.');      
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
.container {
  width: 100%;
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  list-style-type: none;
  float: left;
  width: 33.3%;
  position: relative;
  text-align: center;
}

.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  display: block;
  text-align: center;
  margin: 0 auto 1px auto;
  border-radius: 50px;
  background-color: white;
}

.progressbar li:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-Index: -1;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active {
  color: #5ccb85c;
}

.progressbar li.active:before {
  border-color: #5cb85c;
}

.progressbar li.active . li:after {
  background-color: #5cb85c;
}

</style>
