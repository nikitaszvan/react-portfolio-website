import { createClient } from "contentful";

const useContentful = () => {
    console.log(process.env.REACT_APP_CONTENTFUL_SPACE_ID, process.env.REACT_APP_CONTENTFUL_ENVIRONMENT, process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
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