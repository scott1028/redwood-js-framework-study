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
    label: '1 索引',
  },
  {
    key: 'option5',
    label: '2 排行',
  },
  {
    key: 'option6',
    label: '3 性別',
  },
  {
    key: 'option8',
    label: '4 出生',
  },
  {
    key: 'option81',
    label: '5 歲次',
  },
  {
    key: 'option82',
    label: '6 生肖',
  },
  {
    key: 'option9',
    label: '7 享年',
  },
  {
    key: 'option22',
    label: '8 祿位',
  },
  {
    key: 'option21',
    label: '9 備註',
  },
  {
    key: 'isExpandedByDefault',
    label: '10 預設展開',
  },
  {
    key: 'isNotAutoWrap',
    label: '11 不自動換行',
  },
  {
    key: 'noX1InMemoTablet',
    label: '11 不顯示(索引)',
    category: 'memorialTablet',
  },
  {
    key: 'noX3InMemoTablet',
    label: '12 不顯示(世代)',
    category: 'memorialTablet',
  },
  {
    key: 'noX4InMemoTablet',
    label: '13 不顯示(房序)',
    category: 'memorialTablet',
  },
  {
    key: 'noP0InMemoTablet',
    label: '14 不顯示(尊親)',
    category: 'memorialTablet',
  },
  {
    key: 'noM0InMemoTablet',
    label: '15 不顯示(婚主)',
    category: 'memorialTablet',
  },
  {
    key: 'noGenBranchInReport',
    label: '11 不顯示(世代房序)',
    category: 'dbInfoReporter',
  },
  {
    key: 'noP1P2InReport',
    label: '12 不顯示(父母欄位)',
    category: 'dbInfoReporter',
  },
  {
    key: 'noM1M2InReport',
    label: '13 不顯示(婚配欄位)',
    category: 'dbInfoReporter',
  },
  {
    key: 'noNoteInReport',
    label: '14 不顯示(備註欄位)',
    category: 'dbInfoReporter',
  },
  {
    key: 'noUpDTimeInReport',
    label: '15 不顯示(更新日期)',
    category: 'dbInfoReporter',
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
