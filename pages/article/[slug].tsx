import { FunctionComponent } from "react";
import fs from 'fs';
import matter from "gray-matter";
import styles from '../../styles/article.module.css';
//import { ArticleInfo } from "../../interfaces/article";
//import Markdown from "../../components/markdown";
import Layout from "../../components/layout";

interface ArticleMeta {
	title: string;
	slug: string;
	description: string;
	thumbnail: string;
}

interface ArticleInfo {
	meta: ArticleMeta;
	content: string;
}


interface IProps {
    article: ArticleInfo;
}

const Article: FunctionComponent<IProps> = ({ article }) => {
	return (
    <Layout>
       <div className={styles.article}>
            <div className={styles.thumbnail}>
                <img src={article.meta.thumbnail} />

                <div className={styles.title}>
                    <h1>{article.meta.title}</h1>
                </div>
            </div>
            <div className={styles.content}>
                {/* <Markdown content={article.content} /> */}
                {article.content}
            </div>
	   </div>
    </Layout>
 )
}

export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params;

    const content = fs
        .readFileSync(`uploads/${slug}.md`)
        .toString();

    const info = matter(content);

    const article = {
        meta: {
            ...info.data,
            slug
        },
        content: info.content
    }

    return {
        props: {
            article: article
        }
    }
}

export async function getStaticPaths() {
    const files = fs.readdirSync("uploads");
    const paths = files.map(file => ({
        params: {
            slug: file.split('.')[0]
        }
    }))
    
    return {
        paths,
        fallback: false,
    }
}

export default Article;