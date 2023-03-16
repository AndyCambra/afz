import React from 'react'
import { Icon } from '@iconify/react';

const SocialIcons = ({className, classCircle, classIcon, classIconBig}) => {
  return (
    <div className={className}>
    <div className={classCircle}>
    <Icon icon="grommet-icons:instagram" className={classIcon} />
    </div>
    <div className={classCircle}>
    <Icon icon="eva:facebook-outline" className={classIcon} />
    </div>
    <div className={classCircle}>
    <Icon icon="eva:linkedin-outline" className={classIconBig} />
    </div>
    <div className={classCircle}>
    <Icon icon="ps:youtube" className={classIconBig}  />
    </div>
</div>
  )
}

export default SocialIcons