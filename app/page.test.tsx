import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('contains the expected content', () => {
    render(<Page />)
    // This test will need to be updated once we implement the actual page content
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
}) 