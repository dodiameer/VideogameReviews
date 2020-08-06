import Layout from '../../components/layout'
import { getAllReviewsIds, getReviewData } from '../../lib/review';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.name}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.name}</h1>
                <div className={utilStyles.lightText}>
                    {postData.date}
                </div>
                <img src={postData.image} alt={postData.name} className={utilStyles.coverImage}/>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <span className={utilStyles.headingMd}>Rating: {postData.rating}/10</span>
            </article>
        </Layout>
    )
}


export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllReviewsIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getReviewData(params.id)
    return {
        props: {
            postData
        }
    }
}
