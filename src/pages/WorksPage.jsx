import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Dialog } from '../components/ui/dialog'
import { worksData } from '../content/worksData'

const imagesMap = import.meta.glob('../content/pics/*', { eager: true, import: 'default' })

function getImageSource(path) {
  return imagesMap[`../content/${path}`]
}

export default function WorksPage() {
  const [fullscreen, setFullscreen] = useState(null)
  const [touchStartX, setTouchStartX] = useState(0)
  const currentBlock = useMemo(
    () => (fullscreen ? worksData[fullscreen.blockIndex] : null),
    [fullscreen],
  )

  const openImage = (blockIndex, imageIndex) => {
    setFullscreen({ blockIndex, imageIndex })
  }

  const goPrev = () => {
    if (!fullscreen || fullscreen.imageIndex === 0) return
    setFullscreen((prev) => ({ ...prev, imageIndex: prev.imageIndex - 1 }))
  }

  const goNext = () => {
    if (!fullscreen || !currentBlock || fullscreen.imageIndex >= currentBlock.images.length - 1) return
    setFullscreen((prev) => ({ ...prev, imageIndex: prev.imageIndex + 1 }))
  }

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold text-zinc-100 md:text-4xl">Примеры проектов</h1>
      {worksData.map((block, blockIndex) => (
        <Card key={block.title}>
          <CardHeader>
            <CardTitle>{block.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-zinc-300">{block.description}</p>
            {block.images.length > 0 && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {block.images.map((path, imageIndex) => {
                  const src = getImageSource(path)
                  return (
                    <button
                      type="button"
                      key={path}
                      onClick={() => openImage(blockIndex, imageIndex)}
                      className="group relative overflow-hidden rounded-lg border border-zinc-800"
                    >
                      <img
                        src={src}
                        alt={block.title}
                        className="h-56 w-full object-cover transition group-hover:scale-[1.02]"
                      />
                      <span className="absolute right-3 top-3 rounded-md bg-black/60 p-1 text-zinc-100">
                        <ZoomIn className="h-4 w-4" />
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <Dialog open={Boolean(fullscreen)} onOpenChange={() => setFullscreen(null)}>
        {fullscreen && currentBlock && (
          <div
            className="relative w-full max-w-5xl"
            onTouchStart={(event) => setTouchStartX(event.changedTouches[0].clientX)}
            onTouchEnd={(event) => {
              const endX = event.changedTouches[0].clientX
              const delta = endX - touchStartX
              if (delta > 50) goPrev()
              if (delta < -50) goNext()
            }}
          >
            <img
              src={getImageSource(currentBlock.images[fullscreen.imageIndex])}
              alt={currentBlock.title}
              className="max-h-[85vh] w-full rounded-lg object-contain"
            />
            <button
              type="button"
              onClick={goPrev}
              disabled={fullscreen.imageIndex === 0}
              className="absolute left-3 top-1/2 rounded-full bg-zinc-900/80 p-2 text-zinc-100 disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={fullscreen.imageIndex === currentBlock.images.length - 1}
              className="absolute right-3 top-1/2 rounded-full bg-zinc-900/80 p-2 text-zinc-100 disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </Dialog>
    </section>
  )
}
