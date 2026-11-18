"use client"

import { useEffect, useRef, useState } from "react"

export function VideoBarauna() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="aspect-[4/5] w-full max-w-[380px] rounded-2xl overflow-hidden bg-black/40 border border-white/15 shadow-2xl"
    >
      <video
        controls
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        poster="/images/massa-expansiva/video-barauna-poster.webp"
        className="w-full h-full object-cover"
        aria-label="Vídeo da aplicação real de massa expansiva em rocha — registro de Baraúna"
      >
        {shouldLoad && (
          <source src="/videos/massa-expansiva-barauna.mp4" type="video/mp4" />
        )}
        Seu navegador não suporta a reprodução de vídeo.
      </video>
    </div>
  )
}
