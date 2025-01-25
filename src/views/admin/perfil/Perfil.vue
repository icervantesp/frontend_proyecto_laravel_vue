<template>
    <h1>Mi perfil</h1>

    <div v-if="perfil">
        <h3>NOMBRE: {{ perfil.name }}</h3>
        <h3>CORREO: {{ perfil.email }}</h3>
        <h3>CONTRASEÑA: {{ perfil.password }}</h3>
        {{ perfil }}
    </div>
    <div v-else>
<h1>Cargando...</h1>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import authService from '../../../services/auth.service';
const perfil = ref()
onMounted(() => {
    getPerfil()
})
const getPerfil = async() => {
    const {data} = await authService.profile();
perfil.value = data;
}
</script>