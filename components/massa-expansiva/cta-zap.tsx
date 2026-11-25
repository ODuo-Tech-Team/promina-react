"use client"

import type { ReactNode } from "react"

// Número de destino dos leads de massa expansiva: Home Center CG (confirmado em 23/11/2026 - task 868m5e578).
const ZAP_NUMERO = "5583998030018"
// A mensagem é o identificador de origem do lead no ChatGuru — não alterar o texto.
const ZAP_TEXTO = "Olá! Vim da página de Massa Expansiva e quero um orçamento."
const ZAP_URL = `https://wa.me/${ZAP_NUMERO}?text=${encodeURIComponent(ZAP_TEXTO)}`

type Props = {
  posicao: string
  className?: string
  children: ReactNode
}

export function CtaZap({ posicao, className, children }: Props) {
  const onClick = () => {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({
      event: "whatsapp_click",
      origem_pagina: "lp_massa_expansiva",
      posicao_cta: posicao,
    })
  }

  return (
    <a href={ZAP_URL} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
      {children}
    </a>
  )
}
