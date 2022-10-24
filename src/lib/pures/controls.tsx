import React, { useMemo } from 'react'
import {
  Button,
  useTheme,
  Select,
  Spacer,
  Themes,
  useAllThemes,
  Text,
  Keyboard,
} from '@geist-ui/core'
import { useConfigs } from '@lib/config-context'
import useLocale from '@lib/use-locale'
import Router, { useRouter } from 'next/router'
import MoonIcon from '@geist-ui/icons/moon'
import SunIcon from '@geist-ui/icons/sun'
import UserIcon from '@geist-ui/icons/user'
import GitHubIcon from '@geist-ui/icons/github'
import {
  CUSTOM_THEME_TYPE,
  GITHUB_URL,
} from '@lib/constants'

const Controls: React.FC<unknown> = React.memo(() => {
  const theme = useTheme()

  const { pathname } = useRouter()
  const { locale } = useLocale()

  const redirectGithub = () => {
    if (typeof window === 'undefined') return
    window.open(GITHUB_URL)
  }

  return (
    <div className="wrapper">
      <Keyboard
        h="28px"
        command
        font="12px"
        className="shortcuts"
        title="Command + K to search.">
        K
      </Keyboard>
      <Spacer w={0.75} />
      <Button
        w="28px"
        h="28px"
        py={0}
        px={0}
        title={'Language'}>
        <Text font="13px" style={{ fontWeight: 500 }}>
          {'En'}
        </Text>
      </Button>
      <Spacer w={0.75} />
      <Button
        w="28px"
        h="28px"
        py={0}
        px={0}
        icon={<GitHubIcon />}
        onClick={redirectGithub}
        title={'GitHub Repository'}
      />
      <Spacer w={0.75} />
      <Select
        scale={0.5}
        h="28px"
        pure
        value={theme.type}
        title={'Switch Themes'}>
        <Select.Option value="light">
          <span className="select-content">
            <SunIcon size={14} /> {'Light'}
          </span>
        </Select.Option>
        <Select.Option value="dark">
          <span className="select-content">
            <MoonIcon size={14} /> {'Dark'}
          </span>
        </Select.Option>
      </Select>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
        }
        .wrapper :global(kbd.shortcuts) {
          line-height: 28px !important;
          cursor: help;
          opacity: 0.75;
          border: none;
        }
        .wrapper :global(.select) {
          width: 85px;
          min-width: 85px;
        }
        .select-content {
          width: auto;
          height: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .select-content :global(svg) {
          margin-right: 10px;
          margin-left: 2px;
        }
      `}</style>
    </div>
  )
})

Controls.displayName = 'Controls'

export default Controls
