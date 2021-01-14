import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/ocean.css'

// This way is easy, but adds 170K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight';

const CodeExample = ({ children }) => {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript)
    hljs.highlightBlock(children)
  }, [children])

  return (
    <pre
      ref={(ref) => {
        children = ref
      }}
    >
      <code>{children}</code>
    </pre>
  )
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample