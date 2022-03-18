<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-3">Lista de Heróis</h2>

    <v-card 
    class="mx-auto"
    max-width="500"
  >
  
      <v-container fluid>
      <v-row dense>
        <v-col
            v-for="heroi of heroisLista" :key="heroi.id"

        >
          <v-card class="align-center" >
            <v-img
              :src="heroi.images.md"
              class="white--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150px"
              width="150px"              
            >
              <v-card-title size="24">{{ heroi.name }}</v-card-title>
            </v-img>

            <v-card-actions >
              <v-btn icon class="text-center" >
                <v-icon @click="dialog = true">mdi-information</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-container>

  

  
</template>

<script>
export default {
    name: 'ListaHerois',
    data() {
        return {       
            heroisLista: [],
            dialog: false,
        }
    },
    created() {
        fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans')
            .then(resposta => resposta.json())
            .then(json => {
                this.heroisLista = json;
            });
    }
}   
</script>

<style scoped>

</style>