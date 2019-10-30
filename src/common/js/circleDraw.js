export function drawCircle(canvas) {
    var canvas = canvas
    console.log(canvas)
    var context = canvas.getContext('2d')
    console.log(context)
    var centerX = canvas.width/2
    var centerY = canvas.height/2
    var rad = Math.Pi*2/100
    var speed = 0.1

    function moveCircle(n) {
        context.save()
        context.strokeStyle = "red"
        context.lineWidth = 5
        context.beginPath()
        //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.arc(centerX, centerY, 100, -Math.PI/2, -Math.PI/2 + n*rad, false)
        context.stroke()
        context.closePath()
        context.restore()
    }
    function borderCircle() {
        context.save()
        context.beginPath()
        context.lineWidth = 2
        context.strokeStyle = "#FFFFFF"
        context.arc(centerX, centerY, 100, 0, Math.PI*2, false)
        context.stroke()
        context.closePath()
        context.restore()
    }
    function text(n) {
        context.save()
        context.strokeStyle = "#666666"
        context.font = "20px Arial"
        context.strokeText(n.toFixed(0)+"%", centerX-25, centerY+10)
        context.stroke()
        context.restore()
    }
    function drawFrame() {
        window.requestAnimationFrame(drawFrame)
        context.clearRect(0, 0, canvas.width, canvas.height)
        borderCircle()
        text(speed)
        moveCircle(speed)
        if (speed < 100) {
            speed += 1
        }

    }
    drawFrame()
}
