<template>
  <img src="~assets/wave.png" class="wave" alt="login-wave">
  <!--<q-page class="flex flex-center" padding>-->
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/login.svg" class="responsive" alt="login-image">
    </div>
   
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
         class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
      <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2>
            </div>
          </div>
        </q-card-section>

       <!--<q-card-section>
         <div>
          <h5 class="q-my-md text-center"> 
            Login 
          </h5>
        </div>
        </q-card-section> -->

        <q-card-section>
        <q-form>

          <q-input filled label = "UserName" placeholder="email@example.com" class = "q-mb-md" />
          <q-input label = "Password" type="password" class = "q-mb-sm" />
          <q-checkbox label ="Remember me" :model-value ="false"/>
         
        <div>

        <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg">
                <router-link class="text-white" to="/login">Forgot Password?</router-link>
              </div>
         </div>
      
         </q-form>
        </q-card-section>
      </q-card> 
     </div>
     </div>
  <!--</q-page>-->
</template>

<script>
import { useQuasar } from 'quasar'
import { mapActions } from 'vue'

let $q

export default {
  // name: 'PageName',

  mounted () {
    $q = useQuasar()
  }
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