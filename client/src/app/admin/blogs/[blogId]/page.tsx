import BlogDetailsPage from "@Components/blog/BlogDetailsPage"

export default function page({ params, searchParams }: any) {
  const { blogId } = params
  return (
    <>
      <BlogDetailsPage blogId={blogId} />
    </>
  )
}
