import {Link} from 'gatsby'
import React from 'react'
import {cn, buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'

import styles from './project-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function ProjectPreview (props) {
  const moment= require('moment')
  return (
    <Link className={styles.root} to={`/project/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((3 /4) * 600))
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}, {moment(props.publishedAt).format('YYYY')}</h3>
    </Link>
  )
}

export default ProjectPreview