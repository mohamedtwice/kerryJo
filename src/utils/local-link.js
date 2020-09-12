const config = {
    wordPressURL: `https://wp.saintpaulpromiseneighborhood.org`,
}
export const createLocalLink = url => {
    if (`#` === url) {
        return null
    }
    return url ? url.replace(config.wordPressURL, "/") : url
}