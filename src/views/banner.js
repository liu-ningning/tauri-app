import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { CONFIG, getTimeDiff } from '../config'

const { endTime, mainPath, diffBg, diffColor } = CONFIG.tmplInfo
const Banner = Props => {
  const [diffTime, setDiffTime] = useState(getTimeDiff(endTime - moment().unix()))

  useEffect(() => {
    if (diffTime) {
      const diff = setInterval(() => {
        setDiffTime(getTimeDiff(endTime - moment().unix()))
      }, 1000)
      return () => clearTimeout(diff)
    }
  }, [diffTime])

  return (
    <div className="dat-banner">
      <img className="dat-banner-main" src={mainPath} alt="" />
      <img
        className="dat-banner-rule"
        src={Props.icon}
        role='presentation'
        alt=""
      />
      {diffTime && (
        <div style={{ background: diffBg, color: diffColor }} className="dat-banner-diff">{diffTime}</div>
      )}
    </div>
  )
}

export default Banner