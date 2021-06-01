import { useState, useEffect } from 'react'
import Link from 'next/link'

import axios from 'axios'

import App from '../components/app'
import Contents from '../components/contents'
import styles from './index.module.scss'

function Index() {
  const [recentPosts, setRecentPosts] = useState([
    {
      title: '테스트 포스트',
    },
    {
      title: 'Test post 2',
    },
    {
      title: 'Test post 3',
    },
  ]);

  const [archives, setArchives] = useState({});

  const [dates, setDates] = useState([]);

  useEffect(async () => {
    const res = await axios.get('https://blog.hardboiled65.tk/api/v1/archives');

    setArchives(res.data);
    // setDates(archivesDates());
  }, []);

  useEffect(() => {
    setDates(archivesDates());
  }, [archives]);

  function archivesDates() {
    let dates = Object.keys(archives);
    dates = dates.sort((a, b) => {
      return a < b;
    });

    return dates;
  }

  function sortedPostsFor(date) {
    let posts = archives[date].slice();

    posts = posts.sort((a, b) => {
      return a.created < b.created;
    });

    return posts;
  }

  return (
    <App>
      <div className="Index">
        <Contents>
          <h2>Recent posts</h2>
          {dates.map((date, index) => {
            return <div className={styles['post-link']} key={index}>
              <h3>{ date }</h3>
              {sortedPostsFor(date).map((post, index) => {
                return (<>
                  <Link
                    href={`/posts/${post['post_id']}`}
                    key={index}><a>{ post.title }</a>
                  </Link>
                  <p key={index}>{ post.created }</p>
                </>)
              })}
            </div>
          })}
        </Contents>
      </div>
    </App>
  )
}

export default Index
