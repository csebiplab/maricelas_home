import ShareComponent from "@/components/Dashboard/Common/shareComponent/ShareComponent";



async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


const page = async ({ params }) => {
  const { id } = params;
  const data = await getData(id)


  const endPoints = "blogs";


  const { blogs } = data ?? {};

  const { title, description, keywords } = blogs ?? {}
  return (
    <ShareComponent
      id={id}
      titleValue={title}
      descriptionValue={description}
      keywordsValue={keywords}
      endPoints={endPoints}
    />
  );
};

export default page;