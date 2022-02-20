//* ///////////////////////////////////////////////////////////////////////////
//* CardParagraph
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import styled from 'styled-components';
import { COLORS } from '../../colors';
//* ===========================================================================

interface ICardParagraphProps {
 quantityIsZero?: boolean;
}

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
//* 3.1.- CardParagraph
//* ---------------------------------------------------------------------------
const CardParagraph = styled.p<ICardParagraphProps>`
 margin-bottom: 0.4rem;
 text-align: center;
 font-size: 1rem;
 color: ${({ quantityIsZero }) => (quantityIsZero ? COLORS.error : COLORS.backgroundDark)};
`;
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 4.- Exported components
//* ===========================================================================
export { CardParagraph };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
