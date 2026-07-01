import { Component } from 'react'

/**
 * Renders `fallback` if its subtree throws while rendering.
 * Used to guard the samasante <Glass> layer: if the (v0.1.1) refraction
 * engine throws in some browser, the panel degrades to plain CSS glass
 * instead of white-screening the page.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.warn('[glass] refraction layer failed, using CSS fallback:', error)
  }

  render() {
    if (this.state.failed) return this.props.fallback
    return this.props.children
  }
}
