//* ///////////////////////////////////////////////////////////////////////////
//* CardMainContainer
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { ContainerFlex } from '../ContainerFlex';
import { COLORS } from '../../colors';
//* ===========================================================================

//* ===========================================================================
//* 2.- Reusable Components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.-
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Used components
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 3.1.- CardMainContainer
//* ---------------------------------------------------------------------------
const CardMainContainer = styled(ContainerFlex)`
 width: 10rem;
 padding: 0.8rem 0.2rem;
 border: 1px solid ${COLORS.black};
 border-radius: 5px;
 background-color: ${COLORS.hoverColor};
 box-shadow: 2px 2px 2px ${COLORS.white};
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Exported components
//* ===========================================================================
export { CardMainContainer };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
