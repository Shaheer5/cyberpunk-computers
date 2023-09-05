import { Link } from "react-router-dom"

// styles
import './Error404.css'

export default function Example() {
  return (
    <div className="error-page">

      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="./assets/videos/Cyberpunk-2077-Rogue-AI.mp4" type="video/mp4" />
      </video>

      <main className="error-section grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-4xl 2xl:text-8xl font-blender700">404</p>
          <h1 className="mt-4 text-3xl 2xl:mt-5 2xl:text-9xl tracking-tight font-refinery700 sm:text-5xl">Page not found</h1>
          <p className="mt-6 font-blender400 2xl:text-4xl leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="cp-btn cp-btn-yellow 2xl:text-8xl"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
