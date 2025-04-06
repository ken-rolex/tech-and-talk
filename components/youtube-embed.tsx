export function YoutubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="space-y-2">
      <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
  )
}

