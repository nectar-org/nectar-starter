import React, { useEffect, useMemo, useRef } from 'react'
import Router from 'next/router'
import {  Spacer } from '@geist-ui/core'
import SideItem, { Sides } from './side-item'
import useLocale from '@lib/use-locale'
import { useConfigs } from '@lib/config-context'
import Metadata from '@lib/data'

export interface Props {}

export type SideChildren = Sides | Array<Sides>

export const SideGroup: React.FC<{ sides?: SideChildren }> = React.memo(({ sides }) => {
  if (!sides) return null
  sides = Array.isArray(sides) ? sides : [sides]
  return (
    <SideItem sides={sides}>
      <SideGroup />
    </SideItem>
  )
})

SideGroup.displayName = 'SideGroup'

export const Sidebar: React.FC<Props> = React.memo(() => {
  const boxRef = useRef<HTMLDivElement>(null)
  const { sidebarScrollHeight, updateSidebarScrollHeight } = useConfigs()
  const { locale, tabbar } = useLocale()

  const tabbarData = useMemo(() => {
    const allSides = Metadata[locale]
    const currentSide = allSides.find(side => side.name === tabbar)
    return (currentSide?.children || []) as Array<Sides>
  }, [locale, tabbar])

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      if (!boxRef.current) return
      updateSidebarScrollHeight(boxRef.current.scrollTop || 0)
    })
  }, [])

  useEffect(() => {
    if (!boxRef.current) return
    boxRef.current.scrollTo({ top: sidebarScrollHeight })
  }, [boxRef.current])

  return (
    <div ref={boxRef} className="sides box">
      <SideItem sides={tabbarData}>
        <SideGroup />
      </SideItem>
      <Spacer />
      <style jsx>{`
        .sides {
          width: 100%;
          padding-bottom: 35px;
        }
        .box {
          overflow-y: auto;
          overflow-x: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .box::-webkit-scrollbar {
          width: 0;
          background-color: transparent;
        }
        .box > :global(.item) {
          margin-bottom: 35px;
        }
      `}</style>
    </div>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar