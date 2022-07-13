import React from 'react'
import { CONFIG } from '../config'

const {
  status,
  giftDoublySwitch,
  giftGoods,
  giftTxtTips,
  giftTxtColor,
  giftTxtSmall,
  giftNameColor,
  giftBg,
  giftIconPath,
} = CONFIG.tmplInfo

const Gift = () => (
  <>
    {status === 1 && giftDoublySwitch === 'on' && (
      <div className="dat-gift" style={{ background: giftBg || '#ffffff' }}>
        <div className="dat-gift-title">
          <img src={giftIconPath} alt="" />
        </div>
        <div className="dat-gift-goods">
          {giftGoods.map((item, index) => (
            <p key={index}>
              <img src={item.path} alt="" />
              <span style={{ color: giftNameColor }}>{item.name}</span>
            </p>
          ))}
        </div>
        <div
          className="dat-gift-tips"
          style={{ color: giftTxtColor, transform: `scale(${giftTxtSmall || 1})` }}
        >
          {`- ${giftTxtTips || '聊天室活动'} -`}
        </div>
      </div>
    )}
  </>

)

export default Gift
