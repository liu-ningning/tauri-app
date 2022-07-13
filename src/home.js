import React from 'react'
import { CONFIG } from './config'
import Layout from './components/layout'
import Banner from './views/banner'
import Gift from './views/gift'
import List from './views/list'
import Footer from './views/footer'

const { mainBg, rankingIconPath } = CONFIG.tmplInfo
const Home = () => {
  return (
    <Layout>
      <div className="dat-root" style={{ background: mainBg }}>
        <Banner icon={rankingIconPath} />
        <div className="dat-root-wrap" style={{ minHeight: '27rem' }}>
          <div className="dat-root-main">
            <Gift />
            <div className="dat-root-main-tabs">
              <List />
            </div>
          </div>
        </div>
        <div className="dat-root-foot" style={{ background: mainBg }}>
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
