import styled, { keyframes } from "styled-components";

interface ButtonProps {
  buttonColor?: string;
  onClick?: () => void;
}

export const Button = styled.div<ButtonProps>`
  color: #fff;
  height: 60px;
  width: 150px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: -2px 2px 4px #444, -4px 4px 8px #444, 2px -2px 4px #ddd,
    4px -4px 8px #ddd;
  transition: all 0.2s ease;
  cursor: pointer;
  text-shadow: 1px 2px 3px #000;
  :hover {
    background-color: ${({ buttonColor }) => buttonColor || "#888"};
  }
  :active {
    background-color: ${({ buttonColor }) => buttonColor || "#888"};
    box-shadow: -1px 1px 2px #444, -2px 2px 4px #444, 1px -1px 2px #ddd,
      2px -2px 4px #ddd;
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

export const ComponentTitleWrapper = styled.div`
  justify-content: space-between;
  height: 40px;
  margin-bottom: 16px;
`;

export const ImageInfo = styled.div`
  flex-wrap: wrap;
`;

export const ImageInfoTextBlock = styled.div`
  flex-direction: column;
  margin: 8px 0 8px 8px;
`;

export const ImageInfoTextItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  margin-bottom: 8px;
  max-width: 300px;
`;

export const Thumbnail = styled.img`
  border-radius: 8px;
  box-shadow: -2px 2px 4px #444, -4px 4px 8px #444, 2px -2px 4px #ddd,
    4px -4px 8px #ddd;
  max-width: 160px;
  max-height: 160px;
  margin: 8px;
`;

export const Title = styled.div`
  font-size: 24px;
  align-items: center;
  font-weight: bold;
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
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
`;

export const ErrorText = styled(SecondaryText)`
  color: #c00;
`;

export const Text = styled.p`
  font-weight: 400;
`;

const Wrapper = styled.div`
  flex: 1;
`;

type DropZoneWrapperProps = {
  primaryColor?: string;
  secondaryColor?: string;
  isInDropZone?: boolean;
};

const borderAnimation = (props: DropZoneWrapperProps) => keyframes`
  from {
    border-color: ${props.primaryColor || "gray"} ;
  }
  to {
    border-color: ${props.secondaryColor || "white"} ;
  }
`;

export const DropZoneWrapper = styled(Wrapper).attrs(
  (props: DropZoneWrapperProps) => props
)<DropZoneWrapperProps>`
  border-radius: 8px;
  border: dashed 8px ${(props) => props.primaryColor || "gray"};
  margin-bottom: 16px;
  opacity: 0.5;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: ${(props) => props.isInDropZone && borderAnimation} 0.5s infinite
    ease-out alternate;
  transition: all 0.2s;
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
  box-shadow: 0 4px 8px #444;
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

export const NeumorphicWrapper = styled(Wrapper)`
  box-shadow: inset 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
    inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4);
  padding: 16px;
  border-radius: 16px;
  margin: 8px;
`;

export const ImageSelectorWrapper = styled(NeumorphicWrapper)`
  flex-direction: column;
  min-height: 376px;
`;

export const ImagePreviewWrapper = styled(NeumorphicWrapper)`
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderWrapper = styled(NeumorphicWrapper)`
  line-height: normal;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0;
  max-height: 80px;
`;

export const Row = styled.div`
  flex-direction: row;
`;
