import about from './about'
import home from './home'
import mywork from './mywork'

interface TransitionHandlers {
  onEnter: (el: HTMLElement, done: () => void) => void
  onLeave: (el: HTMLElement, done: () => void) => void
}
const animations: { [key: string]: TransitionHandlers } = {
  mywork,
  home,
  about
}
export default animations
