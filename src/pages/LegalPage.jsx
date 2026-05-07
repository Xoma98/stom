import content from '../content/legal.md?raw'
import MarkdownPage from './MarkdownPage'

export default function LegalPage() {
  return <MarkdownPage title="Правовая информация" markdown={content} />
}
