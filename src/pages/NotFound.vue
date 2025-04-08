<template class="d-flex justify-center align-center">
  <v-app class="d-flex justify-center align-center bg-white"> 
    <v-card
      class="bg-black"
      height="100vh"
    >
      <v-card-title class="d-flex justify-center align-center">
        Página não encontrada
      </v-card-title>
      <v-card-text class="d-flex justify-center align-center flex-column">
        <img
          src="/src/assets/404.jpg"
          width="800px"
          height="400px"
          alt="404 Not Found"
        >
        <h1>Ops, não encontramos essa página, tente acessar a tela de&nbsp;<router-link to="/login">login</router-link></h1>
      </v-card-text>
    </v-card>
  </v-app>
</template>