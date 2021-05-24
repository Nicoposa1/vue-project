<template>
  <div>
    <h1>Profile View</h1>
  </div>
</template>

<script>
import { getApiAccount } from '@/api/search'
export default {
  name: 'ProfileView',
  created () {
    // this.$route.params -> { region:'eu', battletag: 'SuperRambo-2613' }
    this.fetchData()
  },
  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params
      getApiAccount({ region, account })
        .then()
        .cath()
    }
  }
}
</script>
