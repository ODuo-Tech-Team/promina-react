"use client"

import type { ReactNode } from "react"

const ZAP_NUMERO = "5583987177707"
const MENSAGEM_PADRAO =
  "Olá! Vim da página de Andaimes e Escoras e gostaria de solicitar um orçamento."

type Props = {
  posicao: string
  mensagem?: string
  className?: string
  children: ReactNode
}

export function CtaZap({ posicao, mensagem, className, children }: Props) {
  const texto = mensagem || MENSAGEM_PADRAO
  const href = `https://wa.me/${ZAP_NUMERO}?text=${encodeURIComponent(texto)}`

  const onClick = () => {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({
      event: "whatsapp_click",
      origem_pagina: "lp_andaimes_escoras",
      posicao_cta: posicao,
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  )
}
