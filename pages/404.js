import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Custom404 = () => {
  const [path, setPath] = useState('');

  const [debugMessage, setDebugMessage] = useState('');

  useEffect(() => {
    setPath(window.location.pathname.slice(1));
    console.log(path);
  });


  useEffect(() => {
    setDebugMessage('useEffect');
    if (path.startsWith('blog/posts/')) {
      alert('setItem');
      localStorage.setItem('path', path);
      alert('useRouter');
      const router = useRouter();
      alert('router.push');
      router.push(path);
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
