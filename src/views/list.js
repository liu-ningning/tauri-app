import React from 'react'
import { CONFIG, formatNum } from '../config'

const { anchorsRanking } = CONFIG
const { status, tabTxtLeft, tabTxtRight, live, defIcon, rankingEndTxt, emptyIconPath } = CONFIG.tmplInfo
const tabsTxt = [`${tabTxtLeft} `, `${tabTxtRight} `]
const checked = 0

const List = () => {
  const list = anchorsRanking || []
  const listItem = item => (
    <>
      <div className='sort'>{item?.sort > 9 ? item?.sort : `0${item?.sort}`}</div>
      <div className="avatar" role='presentation'>
        <img src={item?.avatar || defIcon} alt="" />
        {Number(item?.room_id) > 0 && (
          <p className="live"><img src={live} alt="" /></p>
        )}
      </div>
      <div className="name">
        <p>{item?.name}</p>
        <p>
          <span>{`${tabsTxt[checked]}: `}</span>
          <span>{formatNum(item?.num)}</span>
        </p>
      </div>
      {status === 1 && checked === 0 && item.fans?.length > 0 && (
        <div className="fans-list">
          {item.fans.map((fans, index) => (
            <img key={index} src={fans.avatar || defIcon} alt="" />
          ))}
        </div>
      )}
    </>
  )

  return (
    <>
      {list?.length > 0 ? (
        <div className="dat-ranking">
          <div className="dat-four-list">
            {list.slice(0, list.length).map(item => (
              <div key={item.sort} className="dat-four-list-item">
                {listItem(item)}
              </div>
            ))}
          </div>
          {rankingEndTxt && (
            <div className="dat-end-txt">{`- ${rankingEndTxt} -`}</div>
          )}
        </div>
      ) : (
        <div className="dat-ranking-empty" style={{ height: `${[0, 3].includes(status) ? 8 : 6}rem` }}>
          <img src={emptyIconPath} alt="" />
        </div>
      )}
    </>

  )
}

export default List