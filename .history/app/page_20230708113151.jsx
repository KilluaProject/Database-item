import Image from 'next/image'

export default function Home() {
  return (
   <div>
      <select className="select select-ghost w-full max-w-xs">
    <option disabled selected>Pick the best JS framework</option>
    <option>Svelte</option>
    <option>Vue</option>
    <option>React</option>
</select>
   </div>
  )
}
