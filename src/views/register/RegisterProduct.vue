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
                    <b-col sm="6">
                      <b-form-group label-for="productName" description="Product Name">
                        <b-input-group>
                          <b-form-input id="productName" type="text" v-model="registration.Name"></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="6">
                      <b-form-group label-for="productDescription" description="Product Description">
                        <b-input-group>
                          <b-form-input id="productDescription" type="text" v-model="registration.Description"></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="6">
                      <b-form-group label-for="productPrice" description="Product Price">
                        <b-input-group>
                          <b-input-group-prepend>
                            <b-input-group-text><i class="">Ksh.</i></b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input type="text" placeholder="" v-model="registration.Price"></b-form-input>
                          <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="6">
                      <b-form-group label-for="productQuantity" description="Product Quantity">
                        <b-input-group>
                          <b-form-input id="productQuantity" type="text" v-model="registration.Quantity"></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <div class="form-actions">
                    <b-button type="submit" variant="success"> Add </b-button>&nbsp
                    <b-button type="reset" variant="danger"><i class="fa fa-ban"></i> Clear </b-button>
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
  name: 'registerProduct',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      registration:{
        Name : "",
        Description : "",
        Price : "",
      }
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
