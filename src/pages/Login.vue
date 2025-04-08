<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <div class="titulocadastro">
      <h2>Faça seu login:</h2>
      <h4>Acesse seus contatos</h4>
    </div>
    <v-card
      width="40%"
      height="60%"
      class="ma-16 d-flex pa-8 justify-center align-center rounded-l bg-white"
    >
      <v-form
        ref="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          class="rounded"
          width="300"
          type="email"
          :rules="[required]"
          placeholder="exemplo@exemplo.com.br"
          label="Digite seu email"
        />
        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          :rules="[required]"
          label="Digite sua senha"
          placeholder="Mínimo de 4 caracteres"
          @click:append-inner="visible = !visible"
        />
        <v-btn
          size="large"
          type="submit"
          class="bg-white"
        >
          Acessar conta
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
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
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const snackbar = ref(false);
const text = ref('');
const timeout = ref(2000);
const colorSnackBar = ref('error');
const email = ref("");
const password = ref("");
const visible = ref(false);
const router = useRouter();
const form = ref(null); 
onMounted(() => {
  localStorage.clear();
});
const onSubmit = () => {
  if (
    form.value &&
    email.value.includes("@") &&
    password.value.length >= 4
  ) {
    localStorage.setItem('auth', 'true')
    
    router.push("/contatos");
  } else if (!email.value && !password.value) {
    text.value = "Complete os campos de login.";
    snackbar.value = true;
    
    localStorage.clear()
  } else {
    text.value = "Email e/ou senha incorretos.";
    snackbar.value = true;
    localStorage.clear()

  }
};

const required = (v: string) => !!v || "Campo obrigatório";
</script>