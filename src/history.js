// Most of these utilities have been respectfully
// copied or modified from @reach/router by Ryan Florence. Thanks Ryan!

function getLocation(source) {
  return {
    ...source.location,
    state: source.history.state,
    id: (source.history.state && source.history.state.id) || 'initial',
  }
}

export function createHistory(source) {
  let listeners = []
  let location = getLocation(source)
  let transitioning = false
  let resolveTransition = () => {}

  return {
    get location() {
      return location
    },

    get transitioning() {
      return transitioning
    },

    _onTransitionComplete() {
      transitioning = false
      resolveTransition()
    },

    listen(listener) {
      listeners.push(listener)

      const popstateListener = () => {
        location = getLocation(source)
        listener({ location, action: 'POP' })
      }

      source.addEventListener('popstate', popstateListener)

      return () => {
        source.removeEventListener('popstate', popstateListener)
        listeners = listeners.filter(fn => fn !== listener)
      }
    },

    _navigate(to, { state, replace = false } = {}) {
      state = { ...state, id: `${Date.now()}` }
      // try...catch iOS Safari limits to 100 pushState calls
      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to)
        } else {
          source.history.pushState(state, null, to)
        }
      } catch (e) {
        source.location[replace ? 'replace' : 'assign'](to)
      }

      location = getLocation(source)
      transitioning = true
      const transition = new Promise(resolve => {
        resolveTransition = resolve
      })
      // setTimeout here to ensure that any unsubs have run before we try and notify them
      setTimeout(() => {
        listeners.forEach(listener => listener({ location, action: 'PUSH' }))
      }, 1)
      return transition
    },
  }
}

export function createMemorySource(initialPathname = '/') {
  let index = 0
  const stack = [{ pathname: initialPathname, search: '', hash: '' }]
  const states = []

  return {
    get location() {
      return stack[index]
    },
    addEventListener() {},
    removeEventListener() {},
    history: {
      get entries() {
        return stack
      },
      get index() {
        return index
      },
      get state() {
        return states[index]
      },
      pushState(state, _, href) {
        const [pathname, search = ''] = href.split('?')
        const hash = pathname.includes('#')
          ? pathname.split('#').reverse()[0]
          : ''
        index += 1
        stack.push({ pathname, search, href, hash })
        states.push(state)
      },
      replaceState(state, _, href) {
        const [pathname, search = ''] = href.split('?')
        const hash = pathname.includes('#')
          ? pathname.split('#').reverse()[0]
          : ''
        stack[index] = { pathname, search, href, hash }
        states[index] = state
      },
    },
  }
}
