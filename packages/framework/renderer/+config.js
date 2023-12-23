//import vikeReact from 'vike-react'

export default {
    clientRouting: false,
    hydrationCanBeAborted: true,
    passToClient: ['pageProps', 'urlPathname'],
    onRenderHtml: 'import:framework/renderer/onRenderHtml:onRenderHtml',
    onRenderClient: 'import:framework/renderer/onRenderClient:onRenderClient',
    meta: {
        Layout: {
            env: {
                server: true,
                client: false
            }
        },
        Page: {
            env: {
                server: true,
                client: false
            }
        }
    }
}