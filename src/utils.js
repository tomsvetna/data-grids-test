/**
 * Utility class that measures FPS.
 */
export class FPS {
    /**
     * Start measuring
     */
    static start() {
        this.start = null
        this.frameCount = 0
        this.running = true
        this.frames = []
        this.prevFrameTime = null

        console.log('Starting frame counter')

        requestAnimationFrame(this.frameCounter)
    }

    /**
     * Stop measuring and print the result to console
     */
    static stop() {
        this.running = false

        const elapsed = performance.now() - this.start,
            sum = this.frames.reduce((sum, time) => (sum += time)),
            average = this.frames.length / (sum / 1000),
            fps = this.frameCount / (elapsed / 1000)

        console.table({
            'Elapsed time': elapsed,
            Frames: this.frameCount,
            'Frame sum': sum,
            'Average FPS 1': fps,
            'Average FPS 2': average,
        })

        //console.log(this.frames);
    }

    // Internal function that counts animation frames
    static frameCounter() {
        const time = performance.now()

        if (FPS.start === null) {
            FPS.start = time
            FPS.prevFrameTime = time
        } else {
            FPS.frameCount++
            FPS.frames.push(time - FPS.prevFrameTime)
        }

        FPS.prevFrameTime = time

        if (FPS.running) {
            requestAnimationFrame(FPS.frameCounter)
        }
    }
}

/**
 * Utility class that scrolls an element a predetermined distance by updating its `scrollTop` on a timer
 */
export class Scroller {
    /**
     * Start scrolling, will stop automatically when `distance` is reached
     * @param {HTMLElement} element Element to scroll
     * @param {Number} distance Target distance to scroll
     * @param {Number} speed Initial scroll speed (px per update)
     * @param {Number} maxSpeed Max scroll speed (px per update)
     * @param {Number} acceleration Added to `speed` on each scroll, up to `maxSpeed`
     * @param {Function} callback Callback to call when done scrolling
     * @param {Function} scrollFn Function to call instead of setting `scrollTop` on the element
     */
    static scroll({
        element,
        distance = 50000,
        speed = 5,
        maxSpeed = 1000,
        acceleration = 1,
        callback,
        scrollFn,
    }) {
        let scrollTop = 0

        console.log('Starting to scroll', element)

        const intervalId = setInterval(() => {
            if (scrollFn) {
                scrollFn(scrollTop)
            } else {
                element.scrollTop = scrollTop
            }

            scrollTop += speed

            if (speed < maxSpeed) {
                speed += acceleration
            }

            if (scrollTop > distance) {
                clearInterval(intervalId)

                console.log('Finished scrolling')

                callback && callback()
            }
        }, 1)
    }
}
