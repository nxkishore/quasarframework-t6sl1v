<template>
  <img src="/assets/wave.png" class="wave" alt="login-wave">
  <q-page class="flex flex-center" padding>
    <div class="full.width" style="max-width: 350px;">
      <h5 class="q-my-md text-center"> 
        Login 
      </h5>
      <q-card>
        <q-card-section>
        <q-form>

          <q-input filled label = "email" placeholder="email@example.com" class = "q-mb-md" />
          <q-input label = "password" type="password" class = "q-mb-sm" />
          <q-checkbox label ="Remember me" :model-value ="true"/>
          </q-form>
        </q-card-section>

        <q-btn label="Login" class="full-width" color="primary"> 
        </q-btn>
        </q-card> 
     </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>