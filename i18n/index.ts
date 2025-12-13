const pages = [
    'pages/login.json'
]

const layouts = [
    'layouts/sidebar.json'
]

const components = []

function withLocale(locale: 'en' | 'uk', paths: string[]) {
    return paths.map(p => `${locale}/${p}`)
}

export const locales = [
    {
        code: 'en',
        name: 'English',
        files: [
            ...withLocale('en', pages),
            ...withLocale('en', layouts),
        ]
    },
    {
        code: 'uk',
        name: 'Ukrainian',
        files: [
            ...withLocale('uk', pages),
            ...withLocale('uk', layouts),
        ]
    }
]