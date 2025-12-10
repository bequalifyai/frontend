<template>
    <Button class="" size="small" label="Click me" />
    {{ locale }}
</template>

<script setup>
const { locale } = useI18n();
</script>
