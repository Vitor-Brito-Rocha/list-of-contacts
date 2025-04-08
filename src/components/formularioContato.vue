<template>
  <v-toolbar-title>Teste Prático</v-toolbar-title>
  <v-container>
    <v-card>
      <v-card-title>Contato</v-card-title>
      <v-form>
        <v-text-field
          v-model="formsDados.nome"
          type="name"
          label="Nome*"
          required
        />
        <v-text-field
          v-model="formsDados.email"
          type="email"
          label="Email*"
          required
        />

        <v-text-field
          v-model="formsDados.telefone"
          v-maska="'(##) #####-####'"
          type="tel"
          label="Telefone*"
          required
        />
        <v-text-field
          v-model="formsDados.cep"
          v-maska="'#####-###'"
          label="CEP*"
          :rules="[validaCEP]"
          required
          type="text"
          @input="formatarCEP"
          @keydown.enter.prevent
          @blur="buscarEndereco"
        />
        <v-text-field
          v-model="formsDados.endereco.logradouro"
          label="Logradouro"
          required
        />
        <v-text-field
          v-model="formsDados.endereco.numero"
          required
          label="Número*"
        />
        <v-text-field
          v-model="formsDados.endereco.bairro"
          label="Bairro"
          placeholder="Digite o bairro"
          required
        />
        <v-text-field
          v-model="formsDados.endereco.localidade"
          label="Cidade"
          placeholder="Digite a cidade"
          required
        />
        <v-text-field
          v-model="formsDados.endereco.estado"
          label="Estado"
          required
        />
      </v-form>
      <v-btn
        append-icon="mdi-account-box"
        :ripple="false"
        type="submit"
        @click="sendtoContatos"
      >
        Salvar
      </v-btn>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { vMaska } from "maska/vue";
const formsDados = ref({
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
const emit = defineEmits(["envioForms"]);
function sendtoContatos() {
   if(!formsDados.value.nome.trim() || !formsDados.value.telefone.trim() || !formsDados.value.email.trim() || !formsDados.value.cep.trim() || !formsDados.value.endereco.numero.trim()){
    alert("Preencha todos os campos obrigatórios.");
     return;
   } else{
  emit("envioForms", formsDados.value);
}}
function formatarCEP() {
  formsDados.value.cep = formsDados.value.cep.replace(/\D/g, "");
  formsDados.value.cep = formsDados.value.cep.replace(/^(\d{5})(\d{3})/, "$1-$2");
  formsDados.value.cep = formsDados.value.cep.slice(0, 9);
}

function validaCEP() {
  return (
    /^\d{5}-?\d{3}$/.test(formsDados.value.cep) ||
    "CEP inválido, tente colocar no formato: 00000-000 ou 00000000;"
  );
}

async function buscarEndereco() {
  if (!validaCEP()) return;
  formsDados.value.cepNumerico = formsDados.value.cep.replace(/\D/g, "");
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${formsDados.value.cepNumerico}/json/`
    );
    formsDados.value.endereco = response.data.erro ? {} : response.data;
  } catch {

}}
</script>
