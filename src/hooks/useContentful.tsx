import { createClient, EntrySkeletonType } from "contentful";
import { MARKS } from '@contentful/rich-text-types';

type ContentfulRoleType = {
    nodeType: 'document';
    data: {};
    content: [
        {
            nodeType: 'paragraph';
            data: {};
            content: [
                {
                    nodeType: 'text';
                    data: {};
                    value: string;
                    marks: Array<{
                        type: typeof MARKS[keyof typeof MARKS];
                    }>;
                }
            ];
        }
    ];
};

type ContentfulImageType = {
    metadata: {
        tags: unknown[];
        concepts: unknown[];
    };
    sys: {
        id: string;
        type: string;
        createdAt: string;
        updatedAt: string;
        [key: string]: any;
    };
    fields: {
        title: string;
        description: string;
        file: {
            contentType: string;
            fileName: string;
            url: string;
            details: {
                size: number;
                image: {
                    width: number;
                    height: number;
                };
            };
        };
    };
}

type SanitizedImageType = {
    title: string;
    description: string;
    file: {
        contentType: string;
        fileName: string;
        url: string;
        details: {
            size: number;
            image: {
                width: number;
                height: number;
            };
        };
    };
}

type SanitizedContentfulEntries = {
    company: string;
    keyContributions: string[];
    logo: SanitizedImageType;
    outcome: string;
    period: string;
    role: string;
    title: string;
}


const useContentful = () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
    });

    const order = ['Junior Frontend Developer', 'Full Stack Developer', 'Junior Technical Support'];

    const getJobHistories = async () => {
        try {
            const entries = await client.getEntries<EntrySkeletonType>({ content_type: "portfolioNikitaVan" });

            const sanitizedEntries: SanitizedContentfulEntries[] = entries.items.map((item) => {
                const { company, keyContributions, outcome, period, title } = item.fields;

                const logo = (item.fields.logo as ContentfulImageType).fields;
                const role = (item.fields.role as ContentfulRoleType).content[0].content[0].value;
                const remainingFields: Omit<SanitizedContentfulEntries, 'role' | 'logo'> = {
                    company: company as string,
                    keyContributions: keyContributions as string[],
                    outcome: outcome as string,
                    period: period as string,
                    title: title as string
                };

                return {
                    ...remainingFields,
                    logo,
                    role
                }

            }).sort((a, b) => {
                return order.indexOf(a.title) - order.indexOf(b.title);

            });

            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching job histories: ${error}`);
        }
    };

    return { getJobHistories };
}

export default useContentful;