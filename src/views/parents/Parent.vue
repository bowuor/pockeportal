<template>
  <b-row>
    <b-col cols="12" lg="6">
      <b-card no-header>
        <template slot="header">
          ID/Passport Number :  {{ $route.params.id }}
        </template>
        <b-table striped small fixed responsive="sm" :items="items($route.params.id)" :fields="fields">
          <template slot="value" slot-scope="data">
            <strong>{{data.item.value}}</strong>
          </template>
        </b-table>
        <template slot="footer">
          <b-button @click="goBack">Back</b-button>&nbsp;
          <b-button class="btn-success" @click="edit">Edit</b-button>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import parentsData from './ParentsData'
export default {
  name: 'Parent',
  props: {
    caption: {
      type: String,
      default: 'Id Number'
    },
  },
  data: () => {
    return {
      items: (id_number) => {
        const parent = parentsData.find( parent => parent.id_number.toString() === id_number)
        const parentDetails = parent ? Object.entries(parent) : [['Id Number', 'Not found']]
        return parentDetails.map(([key, value]) => {return {key: key, value: value}})
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

    }
  }
}
</script>
