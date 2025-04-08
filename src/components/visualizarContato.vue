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
          readonly
        />
        <v-text-field
          v-model="formsDados.email"
          type="email"
          label="Email*"
          readonly
        />
  
        <v-text-field
          v-model="formsDados.telefone"
          v-maska="'(##) #####-####'"
          type="tel"
          label="Telefone*"
          readonly
        />
        <v-text-field
          v-model="formsDados.cep"
          v-maska="'#####-###'"
          label="CEP*"
          readonly
          type="text"
        />
        <v-text-field
          v-model="formsDados.endereco.logradouro"
          label="Logradouro"
          readonly
          outlined
        />
        <v-text-field
          v-model="formsDados.endereco.numero"
          readonly
          label="Número*"
          outlined
        />
        <v-text-field
          v-model="formsDados.endereco.bairro"
          label="Bairro"
          placeholder="Digite o bairro"
          readonly
          outlined
        />
        <v-text-field
          v-model="formsDados.endereco.localidade"
          label="Cidade"
          placeholder="Digite a cidade"
          readonly
          outlined
        />
        <v-text-field
          v-model="formsDados.endereco.estado"
          label="Estado"
          readonly
        />
      </v-form>
    </v-card>
  </v-container>
</template>
  <script setup lang="ts">
  import { ref } from "vue";
  import { vMaska } from "maska/vue";
  const props = defineProps({
  dados: {
    type: Object,
    required: true,
  },
})
  const formsDados = ref({ ...props.dados });
  </script>
  