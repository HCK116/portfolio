'use client'

import { useEffect, useState } from 'react'

/**
 * Local portfolio data for Hans.
 * Intentionally empty so no content from the original author's Supabase
 * database is pulled into this portfolio.
 */
export default function usePortfolio() {
  const [projects, setProjects] = useState<any[]>([])
  const [certificates, setCertificates] = useState<any[]>([])
  const [techStacks, setTechStacks] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setProjects([])
    setCertificates([])
    setTechStacks([])
    setLoading(false)
  }, [])

  return { projects, certificates, techStacks, loading }
}
