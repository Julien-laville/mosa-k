/* receive canvas */
onmessage = (e) => {
  console.log('get canvas')
  const c = e.data.canvas
  const ctx = c.getContext('2d')
  let a = 0
  const draw = () => {
    ctx.fillStyle = "#45f301"
    ctx.fillText("haaa", 10, 10)

    ctx.fillStyle = "#000000"
    ctx.fillRect(0,0,100,100)
    ctx.fillStyle = "#ffffff"
    for(let i = 0; i < 10; i ++) {
      ctx.fillRect(i*10,100*Math.cos(i)+ (++a/4) % 100,1,1)
    }

    requestAnimationFrame(draw)
  }
  draw()

}