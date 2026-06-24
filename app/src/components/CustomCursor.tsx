import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dot.current  && (dot.current.style.left  = e.clientX + 'px', dot.current.style.top  = e.clientY + 'px')
      ring.current && (ring.current.style.left = e.clientX + 'px', ring.current.style.top = e.clientY + 'px')
    }
    const on  = () => { dot.current?.classList.add('hover');    ring.current?.classList.add('hover') }
    const off = () => { dot.current?.classList.remove('hover'); ring.current?.classList.remove('hover') }

    document.addEventListener('mousemove', move)
    const obs = new MutationObserver(() => {
      document.querySelectorAll('a,button,[role="button"]').forEach(el => {
        el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off)
      })
    })
    obs.observe(document.body, { childList: true, subtree: true })
    document.querySelectorAll('a,button,[role="button"]').forEach(el => {
      el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off)
    })
    return () => { document.removeEventListener('mousemove', move); obs.disconnect() }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
