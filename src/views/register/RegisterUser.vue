<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show" class="card-accent-success">
            <div slot="header">
              <i class="fa fa-edit"></i> New User Registration
              <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </b-link>
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-form>
                  <b-row>
                    <b-col sm="2">
                      <b-form-group label="ID Number" for="id-number" description="">
                        <b-form-input type="text" id="id-number" placeholder="ID number"></b-form-input>
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
                        <b-form-input type="text" id="other-names" placeholder="Other names"></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="4">
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
                    <b-col sm="3">
                      <b-form-group
                        :label-cols="3"
                        :horizontal="true">
                        <label for="roleSelect"> User Role</label>
                        <b-form-select id="roleSelect"
                          :plain="true"
                          :options="['Select','Super Admin', 'School Admin', 'Account Admin']"
                          value="Select">
                        </b-form-select>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <!-- <b-row>
                    <b-col>
                      <b-form-group>
                        <label for="address">Postal Address</label>
                        <b-form-input type="text" id="address" placeholder="Enter box number"></b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <label for="street">Physical address</label>
                        <b-form-input type="text" id="street" placeholder="Enter street name"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-row>
                        <b-col sm="8">
                          <b-form-group>
                            <label for="city">City/Town</label>
                            <b-form-input type="text" id="city" placeholder="Enter your city"></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col sm="4">
                          <b-form-group>
                            <label for="postal-code">Postal Code</label>
                            <b-form-input type="text" id="postal-code" placeholder="Postal Code"></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-form-group>
                        <label for="country">County</label>
                        <b-form-input type="text" id="county" placeholder="County name"></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row> -->
                  <div class="form-actions">
                    <b-button type="submit" variant="success">Add</b-button>
                    <b-button type="reset" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
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
  name: 'registerUser',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true
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
