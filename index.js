const workerpool = require('workerpool')
const consumeQueue = require('./thread')

const pool = workerpool.pool({ minWorkers: 'max' })

void (async () => {
  while(true) {
    console.log('Begin loop...\n\n')

    const stats = pool.stats()

    await Promise.allSettled(
      Array.from(Array(stats.idleWorkers))
        .map((_, i) => pool.exec(consumeQueue, [`Consuming queue in thread: ${i + 1}`, i * 100]))
    )

    console.log('\n\nEnd loop!\n\n')

    await sleep(2000)
  }
})()

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
