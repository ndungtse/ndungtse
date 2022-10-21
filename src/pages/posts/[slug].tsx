import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { CMS_NAME } from '../../lib/constants'
import { postQuery, postSlugsQuery } from '../../lib/queries'
import { urlForImage, usePreviewSubscription } from '../../lib/sanity'
import { sanityClient, getClient, overlayDrafts } from '../../lib/sanity.server'
import Layout from '../../components/Layout'

export default function Post({ data = {}, preview }: any) {
  const router = useRouter()

  const slug = data?.post?.slug
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  })

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
		<Layout setLinear={() => {}}>
			<div>
				{router.isFallback ? (
					<p>Loading…</p>
				) : (
					<>
						<article>
							<Head>
								<title>
									{post.title} | Next.js Blog Example with {CMS_NAME}
								</title>
								{post.coverImage?.asset?._ref && (
									<meta
										key="ogImage"
										property="og:image"
										content={urlForImage(post.coverImage)
											.width(1200)
											.height(627)
											.fit("crop")
											.url()}
									/>
								)}
							</Head>
							{/* <PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/> */}
							<p>{post.content} </p>
						</article>
						{/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
					</>
				)}
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params, preview = false }: any) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })
  
  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  }
}
