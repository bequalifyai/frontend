<template>
    <main class="h-full flex flex-col justify-center items-center">
        <Card class="max-w-[448px] w-full aspect-square p-[16px]">
            <template #content>
                <div class="flex flex-col justify-center h-full">
                    <div class="text-center text-2xl font-semibold mb-7">{{ t("title") }}</div>
                    <Form v-slot="$form" @submit="onSubmit" :initial-values :resolver>
                        <div class="flex flex-col gap-7">
                            <div class="flex flex-col gap-1">
                                <FloatLabel>
                                    <label for="email">{{ t("form.email") }}</label>
                                    <InputText id="email" name="email" type="text" fluid />
                                </FloatLabel>
                                <Message
                                    v-if="$form.email?.invalid"
                                    severity="error"
                                    size="small"
                                    variant="simple"
                                    >{{ $form.email.error?.message }}</Message
                                >
                            </div>
                            <div class="flex flex-col gap-1">
                                <FloatLabel>
                                    <label for="password">{{ t("form.password") }}</label>
                                    <InputText
                                        id="password"
                                        name="password"
                                        type="password"
                                        fluid
                                    />
                                </FloatLabel>

                                <Message
                                    v-if="$form.password?.invalid"
                                    severity="error"
                                    size="small"
                                    variant="simple"
                                    >{{ $form.password.error?.message }}</Message
                                >
                            </div>
                            <FloatLabel>
                                <Message
                                    v-if="formError"
                                    severity="error"
                                    size="small"
                                    variant="simple"
                                    >{{ formError }}</Message
                                >
                            </FloatLabel>
                        </div>
                        <Button
                            type="submit"
                            unstyled
                            class="mt-4 w-full bg-[#10B981] text-white hover:bg-[#059669] rounded-md py-2"
                        >
                            {{ t("form.submit") }}
                        </Button>
                    </Form>
                </div>
            </template>
        </Card>
    </main>
</template>

<script lang="ts" setup>
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { login } from "@/api/auth";
import type { FormSubmitEvent } from "@primevue/forms";
import { z } from "zod";
const formError = ref<string>("");

function t(key: string) {
    return $t(`login.${key}`);
}

const initialValues = ref({
    email: "",
    password: "",
});

const resolver = ref(
    zodResolver(
        z.object({
            email: z
                .email({ message: t("form.errors.invalid_email_address") })
                .min(1, { message: t("form.errors.required_email_field") }),
            password: z.string().min(1, { message: t("form.errors.required_password_field") }),
        })
    )
);

async function onSubmit(data: FormSubmitEvent) {
    const email = data.values.email;
    const password = data.values.password;

    if (data.valid) {
        const response = await login(email, password);

        if (response === null) {
            await navigateTo("/");
            return;
        }

        if (response.detail === "Invalid credentials") {
            formError.value = t("form.errors.invalid_credentials");
        }
    }
}
</script>
