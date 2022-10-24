
import React from 'react'


const MenuSkeleton: React.FC<unknown> = () => {

  return (
    <div className="skeleton">
      <style jsx>{`
        .skeleton {
          height: var(--geist-page-nav-height);
          width: 100%;
          margin: 0 auto;
          background-color: $black500;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

export default MenuSkeleton