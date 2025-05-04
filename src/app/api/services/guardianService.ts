
export default {
    async fetchGuardian(term: string) {
        try {
            const response = await fetch(`https://content.guardianapis.com/search?q=${term}&api-key=test`);
            const result = await response.json();
            return result;
        } catch(error) {
            throw error;
        }
    }
}