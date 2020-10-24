import styled, { keyframes } from "styled-components";

interface ButtonProps {
  buttonColor?: string;
  onClick?: () => void;
  hiShadow?: string;
  loShadow?: string;
}

export const Button = styled.div<ButtonProps>`
  font-size: 20px;
  color: #fff;
  background-color: ${({ buttonColor }) => buttonColor || "#888"}; // neutral
  height: 60px;
  width: 150px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: -2px 2px 4px ${({ loShadow }) => loShadow || "#000"},
    -4px 4px 8px ${({ loShadow }) => loShadow || "#000"},
    2px -2px 4px ${({ hiShadow }) => hiShadow || "#fff"},
    4px -4px 8px ${({ hiShadow }) => hiShadow || "#fff"};
  transition: all 0.2s ease;
  cursor: pointer;
  text-shadow: 1px 2px 3px #000;
  :hover,
  :active {
    box-shadow: -1px 1px 2px ${({ loShadow }) => loShadow || "#000"},
      -2px 2px 4px ${({ loShadow }) => loShadow || "#000"},
      1px -1px 2px ${({ hiShadow }) => hiShadow || "#fff"},
      2px -2px 4px ${({ hiShadow }) => hiShadow || "#fff"};
  }
`;

interface IconWrapperProps {
  iconBoxSize?: number;
  iconColor?: string;
  iconSize?: number;
  iconShadow?: string;
  overlayColor?: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: ${({ iconBoxSize }) => (iconBoxSize ? `${iconBoxSize}px` : "48px")};
  height: ${({ iconBoxSize }) => (iconBoxSize ? `${iconBoxSize}px` : "48px")};
  color: ${({ iconColor }) => iconColor || "#888"};
  --webkit-text-fill-color: ${({ overlayColor }) => overlayColor || "none"};
  font-size: ${({ iconSize }) => (iconSize ? `${iconSize}px` : "32px")};
  align-items: center;
  justify-content: center;
  i {
    color: transparent;
    text-shadow: 2px 2px 4px ${({ iconColor }) => iconColor || "#888"},
      0 0 0 #000;
    transition: all 0.2s;
  }
`;

/* inset shadow!!
 
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5),
      inset 8px 8px 16px rgba(0, 0, 0, 0.5),
      inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset -8px -8px 16px rgba(255, 255, 255, 0.5);
*/

export const ButtonText = styled.div`
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  white-space: nowrap;
  cursor: pointer;
`;

export const SecondaryText = styled.p`
  font-weight: 400;
  font-size: 20px;
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

const Wrapper = styled.div`
  flex: 1;
`;

type DropZoneWrapperProps = {
  primaryColor?: string;
  secondaryColor?: string;
};

const borderAnimation = (props: DropZoneWrapperProps) => keyframes`
  from {
    border-color: ${props.primaryColor || "black"} ;
  }
  to {
    border-color: ${props.secondaryColor || "white"} ;
  }
`;

export const DropZoneWrapper = styled(Wrapper).attrs(
  (props: DropZoneWrapperProps) => props
)<DropZoneWrapperProps>`
  border-radius: 8px;
  border: dashed 8px ${(props) => props.primaryColor};
  margin-bottom: 16px;
  opacity: 0.5;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: ${borderAnimation} 0.5s infinite ease-in alternate;
`;

type AppWrapperProps = {
  fontColor?: string;
  backGroundColor?: string;
};

export const AppWrapper = styled(Wrapper).attrs(
  (props: AppWrapperProps) => props
)<AppWrapperProps>`
  max-height: 640px;
  max-width: 640px;
  color: ${(props) => props.fontColor};
  flex-direction: column;
  background-color: ${(props) => props.backGroundColor};
`;

type AppTitleProps = {
  fontColor?: string;
  hiShadowColor?: string;
  loShadowColor?: string;
  fontHoverColor?: string;
};

export const AppTitle = styled.div.attrs((props: AppTitleProps) => props)<
  AppTitleProps
>`
  transition: all 0.2s;
  cursor: pointer;
  color: ${(props) =>
    props.fontColor ? props.fontColor : props.hiShadowColor};
  font-family: "Chango", cursive;
  font-size: 30px;
  text-shadow: -2px 2px 4px ${(props) => props.loShadowColor},
    -4px 4px 8px ${(props) => props.loShadowColor},
    2px -2px 4px ${(props) => props.hiShadowColor},
    4px -4px 8px ${(props) => props.hiShadowColor};
  &:hover {
    color: ${(props) => props.fontHoverColor};
  }
`;

export const ButtonRow = styled.div`
  flex-direction: row;
  justify-content: space-between;
`;

export const ComponentWrapper = styled(Wrapper)`
  box-shadow: inset 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
    inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4);
  padding: 16px;
  border-radius: 16px;
  margin: 8px;
`;

export const ImageSelectorWrapper = styled(ComponentWrapper)`
  flex-direction: column;
  min-height: 376px;
`;

export const HeaderWrapper = styled(ComponentWrapper)`
  line-height: normal;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0;
  max-height: 80px;
`;

export const Row = styled.div`
  flex-direction: row;
`;
