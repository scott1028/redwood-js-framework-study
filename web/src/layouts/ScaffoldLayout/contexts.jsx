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
    label: '排行',
  },
  {
    key: 'option2',
    label: '性別',
  },
  {
    key: 'option3',
    label: '索引',
  },
  {
    key: 'option4',
    label: '享年',
  },
  {
    key: 'option5',
    label: '備註',
  },
  {
    key: 'option6',
    label: '祿位',
  },
  {
    key: 'option7',
    label: 'more',
  },
  {
    key: 'option8',
    label: '細目',
  },
]

export const REGISTERS = [
  {
    key: 'register1',
    /*
    label: '節點索引',
    */
  },
]

const REGISTERS_KEYS = REGISTERS.map((register) => register.key)

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
    const storableState = { ...state }
    REGISTERS_KEYS.forEach((key) => {
      delete storableState[key]
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storableState))
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
    ...[...OPTIONS, ...REGISTERS]
      .map((option) => option.key)
      .reduce(
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
