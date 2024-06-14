"use client"
import Giscus from '@giscus/react';

const Commnets = () => {
  return (
    <Giscus
      repo="mayankified/blog-comments"
			repoId='R_kgDOMJeGgQ'
			category="Announcements"
			categoryId="DIC_kwDOMJeGgc4CgF1N"
			mapping="pathname"
			reactionsEnabled="1"
      strict="0"
			emitMetadata="0"
			inputPosition="bottom"
			theme="light_protanopia"
			lang="en"
			loading="lazy"
      />
  )
}

export default Commnets