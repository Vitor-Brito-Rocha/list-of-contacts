<template>
  <v-app>
    <v-container>
      <v-app-bar 
        color="light-gray" 
        height="50"
      >
        <v-container
          class="app-bar" 
          fluid
        >
          <v-text-field
            v-model="tempSearch"
            label="Pesquisar contato"
            hide-details
            placeholder="Digite o nome do contato"
            density="compact"
            append-inner-icon="mdi-magnify"
            clearable
            style="max-width: 250px"
            @click:clear="showTable"
            @keydown.enter="askSearch"
            @click:append-inner="askSearch"
          />
          <h2>Contatos</h2>
          <v-btn @click="AdicionarContato">
            <v-icon>
              mdi-plus
            </v-icon>
            Adicionar Contato
          </v-btn>
        </v-container>
      </v-app-bar>
      <v-main>
        <v-data-table
          :headers="headers"
          :search="search"
          :filter-keys="['nome']"
          :items="contatos"
          :items-per-page="10"
          :items-per-page-text="'Itens por página'"
          :items-per-page-options="[
            {value: 10, title: '10'},
            {value: 25, title: '25'},
            {value: 50, title: '50'},
            {value: 100, title: '100'},
            {value: -1, title: 'Todos'}
          ]"
        >
          <template #item.actions="{ item }">
            <v-btn @click="visualizarContato(item)">
              <v-icon
                small
                class="mr-2"
              >
                mdi-eye
              </v-icon>
            </v-btn>
            <v-btn @click="editarContato(item)">
              <v-icon
                small
                class="mr-2"
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn @click="deletarContato(item)">
              <v-icon
                small
                class="mr-2"
              >
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-main>
    </v-container>
    <!-- adicionar -->
    <v-dialog
      v-model="dialog"
      transition="scale-transition"
      max-width="1200px"
      height="800px"
    >
      <v-card>
        <v-card-text>
          <FormularioContato @envio-forms="salvarContato" />
        </v-card-text>
        <v-btn
          append-icon="mdi-close"
          :ripple="false"
          @click="dialog = false"
        >
          Cancelar
        </v-btn>
      </v-card>
    </v-dialog>
    <!-- visualizar -->
    <v-dialog
      v-model="visualizar"
      transition="fade-transition"
      max-width="1200px"
      height="800px"
    >
      <v-card>
        <v-card-text>
          <VisualizarContato :dados="dados" />
        </v-card-text>
        <v-btn
          append-icon="mdi-close"
          :ripple="false"
          @click="visualizar = false"
        >
          Cancelar
        </v-btn>
      </v-card>
    </v-dialog>
    <!-- editar -->
    <v-dialog
      v-model="editar"
      transition="scale-transition"
      max-width="1200px"
      height="800px"
    >
      <v-card>
        <v-card-text>
          <EditarContato
            :dados="dados" 
            @edit-forms="contatoEditado" 
          />
        </v-card-text>
        <v-btn
          append-icon="mdi-close"
          :ripple="false"
          @click="editar = false"
        >
          Cancelar
        </v-btn>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      :color="colorSnackBar"
      :timeout="timeout"
    >
      {{ text }}

      <template #actions>
        <v-btn
          color="white"
          variant="text"
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup lang="ts">
import { ref, shallowRef } from "vue";
import FormularioContato from "/home/vitor/Downloads/ teste_pratico/src/components/formularioContato.vue";
import VisualizarContato from "../components/visualizarContato.vue";
import EditarContato from "../components/EditarContato.vue";
// constantes
const visualizar = ref(false)
const editar = ref(false)
const tempSearch = shallowRef("");
const search = ref("");
const snackbar = ref(false)
const colorSnackBar = ref("success")
const text = ref("")
const timeout = ref(2000)
const contato_padrao = ref({
  id: 0,
  nome: "",
  email: "",
  telefone: "",
  cep: "",
  cepNumerico: "",
  endereco: {
    logradouro: "",
    bairro: "",
    localidade: "",
    estado: "",
    numero: "",
  },
});
const valorPadrao = shallowRef(contato_padrao)
const dialog = ref(false);
const headers = [
  { title: "Nome", key: "nome" },
  { title: "Email", key: "email" },
  { title: "Telefone", key: "telefone" },
  { title: "Ações", key: "actions", sortable: false },
];
const contatos = ref([]);
const dados = shallowRef(valorPadrao.value);

// FUNCOES
function showTable(){
  search.value = "";
  tempSearch.value = "";
  contatos.value = [ ...contatos.value ]; 
}
function askSearch(){
  search.value = tempSearch.value.trim();
  if(tempSearch.value==""){
    snackbar.value = true
    text.value = `Você tentou fazer uma pesquisa sem valores`
    colorSnackBar.value = 'light-gray'
  } else if(!contatos.value.some(contato => contato.nome.includes(search.value))){
    snackbar.value = true
    text.value = `Não existem contatos contendo: ${search.value}`
    colorSnackBar.value = 'light-gray'
    search.value = "";
    tempSearch.value ='';
    contatos.value = [ ...contatos.value ];
  } else if(tempSearch.value.trim() == ""){
    contatos.value = [ ...contatos.value ];

  }
}
function visualizarContato(item){
    visualizar.value = true
  dados.value = item
 console.log(item)
}


function editarContato(item) {
  const index = this.contatos.findIndex((ele) => { return  ele.id == item.id })
  editar.value = true
  dados.value = contatos.value[index]
}

function deletarContato(item) {
  const index = this.contatos.findIndex((ele) => { return  ele.id == item.id })
  if(index >= 0){
    this.contatos.splice(index, 1)
  }
  snackbar.value = true
  text.value = "Contato deletado com sucesso"
  colorSnackBar.value = "error"
}

function AdicionarContato(index)
 {
  dialog.value = true;
  console.log(index);
}
function salvarContato(form) {
  

   if(editar.value){
    const index = contatos.value.findIndex(contato => contato.id === valorPadrao.value.id)
   contatos.value[index] = valorPadrao.value
   } else{
    contatos.value.push(form);
  dialog.value = false;
  form.id = contatos.value.length-1;
  snackbar.value = true
  text.value = 'Contato adicionado com sucesso'
  }
}
function contatoEditado(form){
  editar.value = false
  const dados = contatos.value.find(contato => contato.id === form.id)
  valorPadrao.value = {
    id: dados.id,
    nome: dados.nome,
    email: dados.email,
    telefone: dados.telefone,
    cep: dados.cep,
    cepNumerico: dados.cepNumerico,
    endereco: {
      logradouro: dados.endereco.logradouro,
      numero: dados.endereco.numero,
      bairro: dados.endereco.bairro,
      localidade: dados.endereco.localidade,
      estado: dados.endereco.estado
    }
  }
  snackbar.value = true
  text.value = "Contato editado com sucesso"
  colorSnackBar.value = "success"
}
</script>
<style scoped>
.app-bar{
  width: 100vw;
  text-align: flex;
  display: flex !important;
  justify-content: space-between  !important;
  align-items: center !important;
  padding: 20px;
  gap: 50px;
  margin:0px;
  }

</style>