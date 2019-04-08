import React, { useState, useEffect } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import styled from 'styled-components'


const StyledCardOutside = styled(animated.section)`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 85vh;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledCardInside = styled(animated.section)`
  background-color: #ff0080;
  background-size: 85% 85%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 36vh;
  max-width: 300px;
  margin-right: 3vw;
  height: 66vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 1px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
    0 10px 10px -10px rgba(50, 50, 73, 0.3);
  position: relative;
`

const StyledHeadline = styled.p`
  color: white;
  font-weight: bolder;
  font-size: 1.2em;
  position: absolute;
  top: 15px;
  left: 10%;
  right: 10%;
  text-shadow: 1px 1px 10px #000;
`

const StyledComment = styled.p`
  color: white;
  font-weight: bolder;
  font-size: 1.2em;
  position: absolute;
  bottom: 15px;
  left: 10%;
  right: 10%;
  text-shadow: 1px 1px 10px #000;
`

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = i => ({ x: 0, y: i * -4, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  ` rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default function Card({ cards, setCardToUpdate, history }) {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }))
  console.log(props)
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1
      if (!down && trigger) gone.add(index)
      set(i => {
        if (index !== i) return
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
        const scale = down ? 1.1 : 1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600)
    }
  )
  function onClickHandler(index) {
    setCardToUpdate(cards[index]._id)
    history.push(`/CardEditForm/${cards[index]._id}`)
  }
  console.log(cards)
  return props.map(({ x, y, rot, scale }, i) => (
    <React.Fragment>
      <StyledCardOutside
        key={cards[i]._id}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          ),
        }}
      >
        <StyledCardInside
          onClick={() => onClickHandler(i)}
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans),
            backgroundImage: `url(${cards[i].image})`,
            backgroundSize: '85% 85%',
          }}
        >
          <StyledHeadline>{cards[i].title}</StyledHeadline>
          <StyledComment>{cards[i].comment}</StyledComment>
        </StyledCardInside>
      </StyledCardOutside>
    </React.Fragment>
  ))
}
