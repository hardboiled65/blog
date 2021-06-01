import Head from 'next/head'

import Header from './header'

const App = ({ children, title }) => {
  const blogTitle = 'Command-line Interface';

  return (
    <div id="app">
      <Head>
        <title>{title ? title : blogTitle}</title>
      </Head>
      <Header title={title ? title : blogTitle}></Header>
      { children }
    </div>
  )
}

export default App
