<template>
    <main class="h-full flex flex-col justify-center items-center">
        <Card class="max-w-[448px] w-full aspect-square p-[16px]">
            <template #content>
                <div class="flex flex-col justify-center h-full">
                    <div class="text-center text-2xl font-semibold mb-7">Login</div>
                    <Form v-slot="$form" @submit="onSubmit" :initial-values :resolver>
                        <div class="flex flex-col gap-7">
                            <div class="flex flex-col gap-1">
                                <FloatLabel>
                                    <label for="email">Email</label>
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
                                    <label for="password">Password</label>
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
                        </div>
                        <Button
                            label="Submit"
                            type="submit"
                            unstyled
                            class="mt-4 w-full bg-[#10B981] text-white hover:bg-[#059669] rounded-md py-2"
                        />
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

const initialValues = ref({
    email: "",
    password: "",
});

const resolver = ref(
    zodResolver(
        z.object({
            email: z
                .email({ message: "Invalid email address." })
                .min(1, { message: "Email is required." }),
            password: z.string().min(1, { message: "Password is required." }),
        })
    )
);

async function onSubmit(data: FormSubmitEvent) {
    const email = data.values.email;
    const password = data.values.password;

    console.log(data);

    if (data.valid) {
        const response = await login(email, password);
        console.log(response);
    }
}
</script>
