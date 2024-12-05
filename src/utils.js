export const getImageUrl = (path) => {
    // console.log(path)
    // console.log(new URL(`./assets/`+path, import.meta.url).href);

    return new URL(path, import.meta.url).href;
} //take the relative path, save base url of website, append the relative
//console.log(new URL(`/assets/nav/menuIcon.png`, import.meta.url).href);


