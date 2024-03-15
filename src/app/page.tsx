import Heading from "@/components/Heading"
import FavoriteMusicList from "@/components/FavoriteMusicList"
import Photo from "@/components/Photo"
import TodoList from "@/components/TodoList"
import { JetBrains_Mono } from "next/font/google"

const JetNoBrains = JetBrains_Mono({ subsets: ["latin"] })

export default function Home() {
  return (
    <main>
      <div className=" mt-6 flex flex-col p-3">
        <Heading />
        <div className="mb-2">
          I joined the world on April 3rd, 2008, and became a space enthusiast,
          studying in a non-formal education because life is crazy to me 🧨. I
          started learning things in 2020 and began applying them in 2021.
          <div className="mb-4 mt-1">
            <div
              className={`text-base font-light leading-relaxed ${JetNoBrains.className}`}
            >
              &quot;Life is boring, but life still has colors to explore. Find a
              new color or make that color yourself.&quot;
            </div>
            - 2023
          </div>
        </div>
        <Photo />

        <div>
          <h2 className="text-2xl font-semibold mb-2">Favorite song</h2>
          <FavoriteMusicList />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Todos</h2>
          <TodoList />
        </div>
      </div>
    </main>
  )
}
