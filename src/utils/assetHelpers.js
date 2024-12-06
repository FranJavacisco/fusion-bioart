// src/utils/assetHelpers.js
export const getAssetUrl = (path) => {
    return `${import.meta.env.BASE_URL}${path}`
}