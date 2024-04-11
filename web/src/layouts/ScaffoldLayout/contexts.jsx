import {
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from 'react'

const LOCAL_STORAGE_KEY = 'systemOptions'

const ScaffoldContext = createContext()

export const OPTIONS = [
  {
    key: 'option1',
    label: '細目',
  },
  {
    key: 'option2',
    label: '索引',
  },
  {
    key: 'option3',
    label: '排行',
  },
  {
    key: 'option4',
    label: '性別',
  },
  {
    key: 'option5',
    label: '享年',
  },
  {
    key: 'option6',
    label: '祿位',
  },
]

export const ScaffoldContextProvider = ScaffoldContext.Provider

export const useScaffoldContext = () => {
  const context = useContext(ScaffoldContext)
  const [state, dispatch] = context
  const getOnChange = useMemo(() => {
    const map = new Map()
    return (type) => {
      let fn = map.get(type)
      if (!fn) {
        fn = (_, nextValue) => dispatch({ type, [type]: nextValue })
        map.set(type, fn)
      }
      return fn
    }
  }, [dispatch])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  }, [state])
  if (!context) {
    throw new Error('Use useScaffoldContext in ScaffoldContextProvider')
  }
  return [...context, getOnChange]
}

const scaffoldReducer = (state, action) => {
  return { ...state, ...action }
}

export const useScaffoldReducer = () => {
  const initState = {
    ...OPTIONS.map((option) => option.key).reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: false,
      }),
      {}
    ),
    ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}'),
  }
  return useReducer(scaffoldReducer, initState)
}
