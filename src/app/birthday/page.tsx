"use client"

import { useState, useEffect } from "react"
import { differenceInSeconds } from "date-fns"

interface CountdownProps {
  targetDate: Date
}

function Countdown({ targetDate }: CountdownProps) {
  const [remainingTime, setRemainingTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const diff = differenceInSeconds(targetDate, now)
      setRemainingTime(diff > 0 ? diff : 0)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const days = Math.floor(remainingTime / (24 * 60 * 60))
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60)
  const seconds = remainingTime % 60

  return (
    <div>
      {remainingTime <= 0 ? (
        <div>🤯</div>
      ) : (
        <div className="text-md md:text-xl font-bold">
          {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </div>
      )}
    </div>
  )
}

function page() {
  const targetDate = new Date("2024-04-03T00:00:00")

  return (
    <div className="h-screen w-full flex-col flex items-center justify-center p-4">
      <h1>mac&apos;s birthday countdown🤯</h1>
      <Countdown targetDate={targetDate} />
    </div>
  )
}

export default page
