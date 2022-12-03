export const API = async () => {
    try {
        const fetching = await fetch(`https://akabab.github.io/starwars-api/api/all.json`);
        const results = await fetching.json();
        return results;
    }
    catch (error) {
        console.log("Este es el error" + error)
    }
}