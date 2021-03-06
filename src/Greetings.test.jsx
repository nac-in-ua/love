import Greetings from './Greetings'
import { render, screen } from './utils/test-utils'

describe('text in the document', () => {
  it('title is visible', () => {
    render(<Greetings />)
    const title = screen.getByText('I love you so much!')
    expect(title).toBeInTheDocument()
  })
})
