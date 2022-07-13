import React from 'react'
import { CONFIG, formatNum } from '../config'

const { extra } = CONFIG
const { tabTxtLeft, tabTxtRight, bottomBg, defIcon } = CONFIG.tmplInfo
const tabsTxt = [`${tabTxtLeft} `, `${tabTxtRight} `]

const Footer = () => {
  const checked = 0
  const bottomInfo= {
    name: extra?.name || null,
    avatar: extra?.avatar || null,
    sort: extra?.anchor?.sort || -1,
    num: extra?.anchor?.num || 0,
  }

  return (
    <div
      className="dat-footer" style={{ background: bottomBg }}>
      <div className="footer">
        <div className="avatar">
          <img src={bottomInfo.avatar || defIcon} alt="" />
        </div>
        <div className="sort">
          <span>我的排名：</span>
          <span className="yellow">{bottomInfo.sort > 0 ? bottomInfo.sort : '未上榜'}</span>
        </div>
        <div className="fire">
          <span>{`我的${tabsTxt[checked]}：`}</span>
          <span className="yellow">{formatNum(bottomInfo?.num)}</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
