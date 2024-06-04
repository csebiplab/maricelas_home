import dbConnect from "@/lib/db.connect";
import siteMap from "@/models/siteMap";

export default async function sitemap() {
    await dbConnect();
    const data = await siteMap.find({});


    const sites = data?.map((site) => ({
        url: `${site?.url}`,
        lastModified: `${site?.updatedAt}`,
        changeFrequency: 'weekly',
        priority: 1,


    }))


    return [...sites]

}