<template>
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
          <b-button @click="goBack">Back</b-button>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import itemsData from './ItemsData'
export default {
  name: 'Items',
  props: {
    caption: {
      type: String,
      default: 'Item code'
    },
  },
  data: () => {
    return {
      items: (code) => {
        const item = itemsData.find( item => item.code.toString() === code)
        const itemDetails = item ? Object.entries(item) : [['code', 'Not found']]
        return itemDetails.map(([key, value]) => {return {key: key, value: value}})
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
    }
  }
}
</script>
