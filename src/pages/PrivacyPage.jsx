import content from '../content/privacy.md?raw'
import MarkdownPage from './MarkdownPage'

export default function PrivacyPage() {
  return <MarkdownPage title="Политика конфиденциальности" markdown={content} />
}
