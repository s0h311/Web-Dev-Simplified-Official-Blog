import React from 'react'
import { rhythm } from '../utils/typography';

const TAG_STYLES = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '.25em',
  marginRight: rhythm(.5)
}

const TAG_NAME_STYLES = {
  margin: `0 ${rhythm(.3)}`
}

const TAG_COUNT_STYLES = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '.8em',
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '0 .25em .25em 0',
  padding: '0 .5em',
  alignSelf: 'stretch'
}

const INPUT_STYLES = {
  opacity: 0,
  position: 'absolute',
  left: '-99999px'
}

export default function Tag({ tag, onTagSelect, marginTop = rhythm(.5) }) {
  return (
    <>
      {onTagSelect && <input style={INPUT_STYLES} type="checkbox" checked={tag.selected} onChange={onTagSelect} className={onTagSelect && 'tag'} id={`tag-${tag.name}`} value={tag.name} />}
      <label htmlFor={onTagSelect && `tag-${tag.name}`} style={{ ...TAG_STYLES, marginTop: marginTop }}>
        <span style={TAG_NAME_STYLES}>{tag.name}</span>
        {tag.totalCount && <div style={TAG_COUNT_STYLES}>{tag.totalCount}</div>}
      </label>
    </>
  )
}
