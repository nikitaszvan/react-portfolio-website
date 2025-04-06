import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    });

    const getJobHistories = async () => {
        try {
            const entries = await client.getEntries();

            const sanitizedEntries = entries.items.map((item) => {
                const logo = (item.fields.logo as { [key: string]: any }).fields;
                const role = (item.fields.role as { [key: string]: any }).content[0].content[0].value;
                return {
                    ...item.fields,
                    logo,
                    role
                }
            });

            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching job histories: ${error}`);
        }
    };

    return { getJobHistories };
}

export default useContentful;