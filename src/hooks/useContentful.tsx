import { createClient } from "contentful";

type ContentfulLogoAssetType = {
    fields: [key: string];
}

const useContentful = () => {
    const client = createClient({
        space: '77tlwwxcrwns',
        environment: 'master',
        accessToken: '-vZ8zutP1JE0gQc28-xCZuZ_B9k3rbAOAP094HsOIco'
    });

    // client.getEntry('7ff6JA7gOOBiheu6z45pzL')
    // .then((entry) => console.log(entry))
    // .catch(console.error);

    const getJobHistories = async () => {
        try {
            // const entries = await client.getEntries({
            //     content_type: "jobHistory",
            //     // select: "fields"
            // });

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