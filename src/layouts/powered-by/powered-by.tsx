import React from 'react'
import { Text, Link } from '@geist-ui/core'

const PoweredBy: React.FC<unknown> = () => {
  return (
    <div className="powered-by">
      <Text mb={0} font="14px" type="secondary">
        Nectar is an open source template built with Geist and Stitches
      </Text>
      <Text mt={0} font="14px" type="secondary">
        And is powered by{' '}
        <Link color target="_blank" rel="noreferrer nofollow" title='Provided by Buchanan DevOps' href="https://buchanandevops.com">
          Buchanan DevOps
        </Link>
        .
      </Text>
      <style jsx>{`
        .powered-by {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: 30px;
        }
      `}</style>
    </div>
  )
}

export default PoweredBy