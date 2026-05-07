import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Card, CardContent } from '../components/ui/card'

function normalizeMarkdown(text) {
  return text.replace(/\n{3,}/g, '\n\n').trim()
}

export default function MarkdownPage({ title, markdown }) {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-zinc-100 md:text-4xl">{title}</h1>
      <Card>
        <CardContent className="prose prose-invert max-w-none pt-2 prose-headings:text-zinc-100 prose-a:text-yellow-300 prose-strong:text-zinc-100">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {normalizeMarkdown(markdown)}
          </ReactMarkdown>
        </CardContent>
      </Card>
    </section>
  )
}
