import gsap from 'gsap'

export default {
  onEnter: (el: HTMLElement, done: () => void) => {
    const tl = gsap.timeline({
      onComplete: done
    })

    tl.from(
      '#profile_image',
      {
        scale: 0,
        opacity: 0,
        ease: 'power4.easeInOut',
        duration: 0.5
      },
      0
    )
    tl.from(
      '.title, .aboutme-paragrah',
      {
        opacity: 0,
        x: 30,
        duration: 1,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      },
      0
    )

    tl.from(
      '.section-title',
      {
        opacity: 0,
        x: -30,
        duration: 1,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      },
      0.1
    )
    tl.from(
      '.skill-card',
      {
        opacity: 0,
        height: 0,
        duration: 1,
        stagger: 0.075,
        ease: 'power4.easeInOut'
      },
      0.1
    )

    tl.play()
  },
  onLeave: (el: HTMLElement, done: () => void) => {
    const tl = gsap.timeline({
      onComplete: done
    })
    tl.to(
      '#profile_image',
      {
        scale: 0,
        opacity: 0,
        ease: 'power4.easeInOut',
        duration: 0.5
      },
      0
    )
    tl.to(
      '.title, .aboutme-paragrah',
      {
        opacity: 0,
        x: 30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      },
      0
    )

    tl.to(
      '.section_title',
      {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      },
      0
    )
    tl.to(
      '.skill-card',
      {
        opacity: 0,
        height: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'linear'
      },
      0
    )

    tl.play()
  }
}
