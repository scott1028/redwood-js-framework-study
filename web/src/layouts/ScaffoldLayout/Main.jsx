import { useState, useCallback, useEffect } from 'react'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import styled from 'styled-components'

import { useLocation } from '@redwoodjs/router'

import SimpleDetail from '../../components/Person/components/SimpleDetail'

import { MainContextProvider } from './contexts/mainContext'
import { useScaffoldContext } from './contexts/optionContext'

const BottomSection = styled(Box)`
  position: relative;
  height: 220px;
  overflow: auto;

  @media print {
    display: none;
  }
`

const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    top: 0;
    right: -18px;
    transform: translateX(-50%);
  }
`

const RightSectionContent = styled('div')`
  padding-left: 5px;
  padding-bottom: 5px;
`

const Main = ({ children }) => {
  const location = useLocation()
  const [_options, _dispatch, getOnChange] = useScaffoldContext()
  const [viewDetail, _onViewDetail] = useState(null)
  const onViewDetail = useCallback(
    (value) => {
      getOnChange('register1')(null, value?.x1)
      _onViewDetail(value)
    },
    [getOnChange, _onViewDetail]
  )
  useEffect(() => {
    onViewDetail(null)
  }, [onViewDetail, location.pathname])
  return (
    <MainContextProvider value={[viewDetail, onViewDetail]}>
      <main className="rw-main">{children}</main>
      {viewDetail && (
        <BottomSection boxShadow={3} borderRadius={2} padding={2}>
          <StyledIconButton onClick={() => onViewDetail(null)}>
            <HighlightOffIcon />
          </StyledIconButton>
          <RightSectionContent>
            <SimpleDetail person={viewDetail} key={viewDetail.id} />
          </RightSectionContent>
        </BottomSection>
      )}
    </MainContextProvider>
  )
}

export default Main
