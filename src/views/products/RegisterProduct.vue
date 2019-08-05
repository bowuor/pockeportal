<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <transition name="fade">
          <b-card no-body v-if="show" class="card-accent-success">
            <div slot="header">
              <i class="fa fa-edit"></i> New Product
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-form>
                  <b-row>
                    <b-col sm="3">
                      <b-form-group label="Product Code" for="school-code" description="">
                        <b-form-input type="text" id="school-code" placeholder="School Code"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group>
                        <label for="product-name">Product Name</label>
                        <b-form-input type="text" id="product-name" placeholder="Product Name"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        :label-cols="3"
                        :horizontal="true">
                        <label for="levelSelect">Level</label>
                        <b-form-select id="levelSelect"
                          :plain="true"
                          :options="['Please select','Primary', 'Secondary', 'Tertiary/College']"
                          value="Please select">
                        </b-form-select>
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        :label-cols="2"
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
                    <b-col>
                      <b-form-group>
                        <label for="address">Postal Address</label>
                        <b-form-input type="text" id="address" placeholder="Enter box number"></b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <label for="street">Street/Road</label>
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
                  </b-row>
                  <b-row>
                    <b-col sm="4">
                      <b-form-group validated label="Email *" label-for="normalEmail" description="">
                        <b-form-input id="normalEmail" type="email" placeholder="Enter Email.." required tocomplete="email"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group>
                        <label for="telephone">Telephone</label>
                        <b-form-input type="text" id="telephone" placeholder="Telephone number"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col sm="4">
                      <b-form-group>
                        <label for="mobile">Mobile</label>
                        <b-form-input type="text" id="mobile" placeholder="Mobile number" required></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      
                    </b-col>
                  </b-row>
                  <div class="form-actions">
                    <b-button type="submit" variant="primary">Add</b-button>
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
  name: 'registerSchool',
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
