import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.pathname.slice(1));
  })

  useEffect(() => {
    if (path.startsWith('/blog/posts/')) {
      localStorage.setItem('path', path);
      const router = useRouter();
      router.push(path);
    }
  }, [path]);

  return <div>
    <h1>404 - Page not found</h1>
    <p>path: { path }</p>
  </div>
}

export default Custom404
