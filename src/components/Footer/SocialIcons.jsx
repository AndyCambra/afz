import React from 'react'
import { Icon } from '@iconify/react';

const SocialIcons = ({className, classCircle, classIcon, classIconBig}) => {
  return (
    <div className={className}>
    <div className={classCircle}>
    <a href='https://www.instagram.com/afzcaucion' target="_blank" rel="noreferrer"><Icon icon="grommet-icons:instagram" className={classIcon} /></a>
    </div>
    <div className={classCircle}>
    <a href='https://www.facebook.com/afianzadora' target="_blank" rel="noreferrer"><Icon icon="eva:facebook-outline" className={classIcon} /></a>
    </div>
    <div className={classCircle}>
    <a href='https://www.linkedin.com/company/afianzadora' target="_blank" rel="noreferrer"><Icon icon="eva:linkedin-outline" className={classIconBig} /></a>
    </div>
    <div className={classCircle}>
    <a href='https://www.youtube.com/channel/UCMgfjI76rn7vQHy-R0H6lVQ' target="_blank" rel="noreferrer"><Icon icon="ps:youtube" className={classIconBig} /></a>
    </div>
</div>
  )
}

export default SocialIcons
