import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedReviewsData } from '../lib/review';
import Link from 'next/link';

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    I'm Mohammed, but you may know me as dodiameer or Dodi, and I like coding.
                    I also happen to like video games and decided to combine both of 
                    these two skills to make this site! <br/><br/>
                    I'll be reviewing very few games here and I won't be reviewing any of the new games, so keep that in mind and have fun!
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Games</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, name }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href="/games/[id]" as={`/games/${id}`}>
                                <a>{name}</a>
                            </Link>
                            <br />
                            Published on: {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedReviewsData()
    return {
        props: {
            allPostsData
        }
    }
}
