import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import axios from 'axios'

import App from '../../components/app'
import Contents from '../../components/contents'

const Post = () => {
  const router = useRouter();

  const [postId, setPostId] = useState(null);
  const [post, setPost] = useState({});

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const { postId } = router.query;
    setPostId(postId);
  }, [router.isReady]);

  useEffect(async () => {
    if (postId === null) {
      return;
    }

    const res = await axios.get('https://blog.hardboiled65.tk/api/v1/posts/' + postId);

    setPost(res.data);
  }, [postId]);

  return (
    <App title={post.title}>
      <Head>
        <link rel="stylesheet" href="/post.css" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif+KR&display=swap" rel="stylesheet" />
      </Head>

      <div className="Post">
        <Contents>
          <div className="metadata">
            <div className="post-date">Posted date: { post.created }</div>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Contents>
      </div>
    </App>
  )
}

export default Post
