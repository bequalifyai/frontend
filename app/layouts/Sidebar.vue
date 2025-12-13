<template>
    <Menu
        :model="items"
        class="max-w-[255px] w-full rounded-none border-black/10 p-[8px] text-[14px] bg-[#FAFAFA] text-[#171717]"
    >
        <template #start>
            <div class="flex items-center gap-3 p-2">
                <div
                    class="company__logo w-[32px] h-[32px] bg-[#020617] flex items-center justify-center rounded-md"
                >
                    <BrainIcon class="text-white w-[16px] h-[16px]" />
                </div>
                <span class="company__name">TechCorp Solutions</span>
            </div>
        </template>
        <template #item="{ item }">
            <NuxtLink
                :to="localePath(item.route)"
                class="flex items-center gap-2 py-[6px] px-2 rounded-md"
            >
                <component :is="item.customIcon" class="text-black w-[16px] h-[16px]" />
                <span class="leading-[20px]">{{ item.label }}</span>
            </NuxtLink>
        </template>
        <template #end>
            <div class="relative flex items-center justify-between cursor-pointer" @click="toggle">
                <div class="flex gap-2 items-center mb-2 px-2">
                    <span
                        class="rounded-full bg-[#D1D5DB] w-[32px] h-[32px] flex items-center justify-center"
                    >
                        JD
                    </span>
                    <div class="flex flex-col gap-1">
                        <span class="leading-[14px]">John Doe</span>
                        <span class="text-[#6B7280] leading-[14px] text-xs">john@acme.com</span>
                    </div>
                </div>
                <TieredMenu
                    ref="menu"
                    :model="accountItems"
                    popup
                    appendTo="body"
                    class="w-[169px] text-[14px]"
                >
                    <template #item="{ item }">
                        <NuxtLink
                            :to="item.route"
                            class="flex items-center gap-[16px] py-1 pl-[8px]"
                        >
                            <component :is="item.icon" class="text-black w-[16px] h-[16px]" />
                            {{ item.label }}
                        </NuxtLink>
                    </template>
                </TieredMenu>

                <ArrowDown />
            </div>
        </template>
    </Menu>
</template>

<script lang="ts" setup>
import BrainIcon from "@/assets/icons/brain.svg?component";
import StarsIcon from "@/assets/icons/stars.svg?component";
import AddPersonIcon from "@/assets/icons/add-person.svg?component";
import BooksIcon from "@/assets/icons/books.svg?component";
import PhoneIcon from "@/assets/icons/phone.svg?component";
import ChartIcon from "@/assets/icons/chart.svg?component";
import TeamIcon from "@/assets/icons/team.svg?component";
import UserIcon from "@/assets/icons/user.svg?component";
import SettingsIcon from "@/assets/icons/settings.svg?component";
import LogoutIcon from "@/assets/icons/logout.svg?component";
import ArrowDown from "@/assets/icons/arrow-down.svg?component";

const localePath = useLocalePath();

const toggle = (event: MouseEvent) => {
    menu.value.toggle(event);
};

function t(key: string) {
    return $t(`sidebar.${key}`);
}

const menu = ref();

const accountItems = [
    {
        label: t("account.profile"),
        icon: UserIcon,
        route: "/profile",
    },
    {
        label: t("account.settings"),
        icon: SettingsIcon,
        route: "/settings",
    },
    {
        separator: true,
    },
    {
        label: t("account.logout"),
        icon: LogoutIcon,
        route: "/logout",
    },
];

const items = ref([
    {
        items: [
            {
                label: t("dashboard"),
                route: "/",
                customIcon: BrainIcon,
            },
            {
                label: t("calls"),
                route: "/calls",
                customIcon: PhoneIcon,
            },
            {
                label: t("leadGeneration"),
                route: "/lead-generation",
                customIcon: AddPersonIcon,
            },
            {
                label: t("knowledgeBase"),
                route: "/knowledge-base",
                customIcon: BooksIcon,
            },
            {
                label: t("results"),
                route: "/results",
                customIcon: ChartIcon,
            },
            {
                label: t("aiSuggestions"),
                route: "/ai-suggestions",
                customIcon: StarsIcon,
            },
            {
                label: t("team"),
                route: "/team",
                customIcon: TeamIcon,
            },
        ],
    },
]);
</script>

<style>
.p-menu {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

.p-menu-end {
    margin-top: auto;
}

.p-tieredmenu {
    min-width: unset !important;
}
</style>
