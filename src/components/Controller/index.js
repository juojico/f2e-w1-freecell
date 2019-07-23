import React from "react";
import styled, { keyframes } from "styled-components";
import stop from '../../slice_img/icons/icons_stop.svg';
import pause from '../../slice_img/icons/icons_pause.svg';
import undo from '../../slice_img/icons/icons_undo.svg';
import tips from '../../slice_img/icons/icons_tips.svg';
import threecards from '../../slice_img/ui/img_threecards.svg';
import Button from '../../components/Button';

const colorMove = keyframes`
    to {
        background-position: 100% 0%;
    }
`

const ControllerBg = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 735px;
  max-width: 100%;
  height: 72px;
  bottom: 0;
  left: 50%;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(
    135deg,
    rgba(93, 127, 217, 1) 0%,
    rgba(137, 87, 237, 1) 100%
  );
  background-size: 200%;
  box-shadow: 0 -10px 25px rgba(47, 43, 54, 0.8);
  transform: translate(-50%);
  animation: ${colorMove} 3s alternate infinite;
`;

const ControllBtn = styled.div`
    width: 72px;
    height: 72px;
    background-image: url(${props=>props.icon});
    cursor: pointer;
    transition: .2s;
    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
`

const UndoBtn = styled.div`
    height: 100px;
    background: url(${threecards});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: -80px;
    cursor: pointer;
    transition: .2s;
    &:hover {
        margin-top: -90px;
    }
`

const Controller = ({ onStop,onPause,onUndo,onRestart,onTips }) => {
  return (
    <ControllerBg>
        <ControllBtn icon={stop} onClick={onStop}></ControllBtn>
        <ControllBtn icon={pause} onClick={onPause}></ControllBtn>
        <UndoBtn onClick={onUndo}><Button text={'UNDO'} /></UndoBtn>
        <ControllBtn icon={undo} onClick={onRestart}></ControllBtn>
        <ControllBtn icon={tips} onClick={onTips}></ControllBtn>
    </ControllerBg>
  );
};

export default Controller;
