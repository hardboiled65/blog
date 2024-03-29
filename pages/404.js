import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const [path, setPath] = useState('');

  const [debugMessage, setDebugMessage] = useState('');

  useEffect(() => {
    setPath(window.location.pathname.slice(1));
  });

  const router = useRouter();

  useEffect(() => {
    setDebugMessage('useEffect');
    if (path.startsWith('blog/posts/')) {
      localStorage.setItem('path', path);
      const realRealPath = path.slice('5');
      router.push('/' + realRealPath);
    } else {
      setDebugMessage('Not starts with blog/posts/');
    }
  }, [path]);

  return <div>
    <h1>404 - Page not found</h1>
    <p>path: { path }</p>
    <p>debugMessage: { debugMessage }</p>
  </div>
}

export default Custom404
