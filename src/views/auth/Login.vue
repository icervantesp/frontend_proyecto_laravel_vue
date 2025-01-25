<template>
    <h1>Ingresar</h1>
    <div>
        <label for="">Ingrese su Correo</label>
        <input type="text" v-model="usuario.email">
        <br>
        <label for="">Ingrese su Contraseña</label>
        <input type="password" v-model="usuario.password">
        <br>
        <input type="button" value="Ingresar" v-on:click="funIngresar()">
    </div>
    {{ usuario }}
</template>

<script setup>
import { ref } from 'vue';
import authService from '../../services/auth.service';
import { useRoute, useRouter } from 'vue-router'

const usuario = ref({});
const route = useRouter()

async function funIngresar() {
    const {data} = await authService.login(usuario.value)
    localStorage.setItem("access_token", data.access_token)
    route.push("/admin/perfil");
}
</script>