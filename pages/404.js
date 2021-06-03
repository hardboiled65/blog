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

  return <div>404</div>
}

export default Custom404
