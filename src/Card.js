import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import styled from 'styled-components'

const cardsImage = [
  'https://images.unsplash.com/photo-1548946522-4a313e8972a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80',
  'https://images.unsplash.com/photo-1540981493580-8ea1113e9968?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
  'https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-1.2.1&auto=format&fit=crop&w=2032&q=80',
  'https://images.unsplash.com/photo-1534193561958-40bfcd20ee4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  'https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=955&q=80',
  'https://images.unsplash.com/photo-1537185664194-89a481f7fcfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80',
  'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
  'https://images.unsplash.com/photo-1529042222786-e26b38309122?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80',
  'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80',
  'https://images.unsplash.com/photo-1504185945330-7a3ca1380535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=921&q=80,',
]

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
  background-color: red;
  background-size: 85% 85%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 38vh;
  max-width: 300px;
  height: 64vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 1px;
  box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
    0 10px 10px -10px rgba(50, 50, 73, 0.3);
`

const StyledHeadline = styled.p``

const StyledText = styled.p``

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = i => ({ x: 0, y: i * -4, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`

export default function Card({ subtitle }) {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cardsImage.length, i => ({
    ...to(i),
    from: from(i),
  }))
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
      if (!down && gone.size === cardsImage.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600)
    }
  )
  return props.map(({ x, y, rot, scale }, i) => (
    <React.Fragment>
      <StyledCardOutside
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          ),
        }}
      >
        <StyledCardInside
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans),
            backgroundImage: `url(${cardsImage[i]})`,
          }}
        >
          Ich bin ein Text der super informativ ist!!
        </StyledCardInside>
      </StyledCardOutside>
    </React.Fragment>
  ))
}
