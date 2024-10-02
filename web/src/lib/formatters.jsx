import React from 'react'

import humanize from 'humanize-string'

const MAX_STRING_LENGTH = 150

export const formatEnum = (values) => {
  let output = ''

  if (Array.isArray(values)) {
    const humanizedValues = values.map((value) => humanize(value))
    output = humanizedValues.join(', ')
  } else if (typeof values === 'string') {
    output = humanize(values)
  }

  return output
}

export const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

export const truncate = (value) => {
  let output = value?.toString() ?? ''

  if (output.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }

  return output
}

export const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime) => {
  let output = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toUTCString()}
      </time>
    )
  }

  return output
}

const isValidDate = (d) => {
  return d instanceof Date && !isNaN(d)
}

export const formatDate = (value) => {
  if (!value) return '-'
  const dateValue = new Date(value)
  if (!isValidDate(dateValue)) return '-'
  return new Intl.DateTimeFormat('zh-TW', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Asia/Taipei',
  }).format(dateValue)
}

export const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}
