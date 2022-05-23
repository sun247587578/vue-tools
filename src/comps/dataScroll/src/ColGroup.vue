<template>
  <colgroup>
    <col v-for="(col, index) in columns"
         :key="`list_${_uid}_col_${index}`"
         :name="`my-dv-list_col_${index}`"
         :width="col.width||defaultWidth"/>
  </colgroup>
</template>

<script>
  export default {
    props: {
      columns: Array,
      defaultWidth: Number
    }
  }
</script>


