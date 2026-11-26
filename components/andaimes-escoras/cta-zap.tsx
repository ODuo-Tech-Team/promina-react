"use client"

import type { ReactNode } from "react"

// Home Center Campina Grande: a LP é só de venda (task 1gab6jjzrqb, 25/11/2026).
const ZAP_NUMERO = "5583998030018"
const MENSAGEM = "Olá! Vim da página de Andaimes e Escoras e quero um orçamento."

type Props = {
  posicao: string
  className?: string
  children: ReactNode
}

export function CtaZap({ posicao, className, children }: Props) {
  const href = `https://wa.me/${ZAP_NUMERO}?text=${encodeURIComponent(MENSAGEM)}`

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
