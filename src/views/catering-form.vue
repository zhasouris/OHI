<template>
  <catering-form>
    <v-btn text :large="$vuetify.breakpoint.mdAndUp" :small="$vuetify.breakpoint.smAdnDown"  slot="activator">Catering</v-btn>
  </catering-form>
</template>

<script>
import cateringForm from "@/components/catering-form"
export default {
  name: 'Home',
  components: {
    cateringForm
  }
}
</script>
