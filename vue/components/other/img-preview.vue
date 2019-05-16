<template>
  <dialog-body dialogWidth="800px"
     ref="dialogBodyRef"
     :dialogTitle="zzlLang.previewImg"
     @closeDialog="closeUserModal"
     @submitData="addOrUpdateUser('userForm')">
  </dialog-body>
</template>

<script>
import dialogBody from '@/components/dialog/dialog-body';
export default {
  name: 'img-preview',
  components: {dialogBody}
}
</script>

<style scoped>

</style>
