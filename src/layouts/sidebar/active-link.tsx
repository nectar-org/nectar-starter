import React, { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface Props {
  onAcitve?: () => void
  href: string
  text: string
}

const ActiveLink: React.FC<Props> = React.memo(({ href, text }) => {
  const { pathname } = useRouter()
  const [title, subtitle] = useMemo(() => {
    if (!/[\u4E00-\u9FA5]/.test(text)) return [text, null]
    if (/zeit|ui|ZEIT|geist|Geist|UI/.test(text)) return [text, null]
    return [text.replace(/[^\u4E00-\u9FA5]/g, ''), text.replace(/[^a-zA-Z]/g, '')]
  }, [text])
  const isActive = pathname === href

  return (
    <>
      <Link href={href}>
        <a className={`link ${isActive ? 'active' : ''}`}>
          {title}
          {subtitle && <span>&nbsp;{subtitle}</span>}
        </a>
      </Link>
      <style jsx>{`
        a {
          font: inherit;
        }
        .link {
          display: flex;
          align-items: baseline;
          font-size: 1rem;
          color: $blue100;
          padding: calc(20px * 0.375) 0;
          transition: all 200ms ease;
        }
        span {
          font-size: 0.75rem;
          color: $blue400;
          font-weight: 400;
        }
        .link.active {
          color: $green400;
          font-weight: 600;
        }
        .link.active span {
          color: $green600;
        }
      `}</style>
    </>
  )
})

ActiveLink.displayName = 'ActiveLink'

export default ActiveLink