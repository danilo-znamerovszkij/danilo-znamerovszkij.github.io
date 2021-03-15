import styled, { css } from 'styled-components';
import { minWidth, maxWidth } from '../../../styles/settings.breakpoints.styles';
import spacing from '../../../styles/settings.spacing.styles';

export interface WcagProps {
  color: string
}

const Wcag = styled.div<WcagProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;

  ${props => props.color && css`
    color: ${props.color};
  `}

  ${maxWidth(992, () => css`
    margin-top: ${spacing.margin * 2.5}px;
  `)}

  ${minWidth(992, () => css`
    text-align: right;
    justify-content: flex-end;
  `)}
`;

export default Wcag;
