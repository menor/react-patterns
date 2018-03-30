import React from 'react'
import styled, {css} from 'styled-components'

const Switch = ({on, ...props}) => (
  <Toggle>
    <Input type="checkbox" />
    <Button on={on} aria-expanded={on} {...props} />
  </Toggle>
)

export default Switch

const Toggle = styled.div``

const Input = styled.input`
  display: none;
`

const Button = styled.button`
  background: ${({on}) => on ? '#86d993' : '#fbfbfb'};
  border: 1px solid #e8eae9;
  border-radius: 1.5rem;
  cursor: pointer;
  display: inline-block;
  height: 1.5rem;
  outline: 0;
  position: relative;
  padding: 2px;
  transition: all 0.4s ease;
  user-select: none;
  width: 2.5rem;

  &:active {
    ${({on}) => on && css` box-shadow: none; `};
  }

  &::after {
    background: #fbfbfb;
    border-radius: 2em;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
    content: '';
    display: block;
    height: 100%;
    position: relative;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    width: 50%;

    ${({on}) => on ? 'left: 50%' : 'left: 0'};
  }

  &:focus::after,
  &:active::after {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08),
      inset 0px 0px 0px 1.5px #9c9c9c;
  }

  &:active::after {
    padding-right: 0.8em;
    ${({on}) => on && css` margin-left: -0.8em; `};
`
