import { useState } from 'react'
import { MoodSelector } from './MoodSelector'
import { MoodResults } from './MoodResults'
import type { Mood } from '../composables/moodConfig'

export function MoodPage() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null)

  return (
    <div>
      <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />
      {selectedMood && <MoodResults mood={selectedMood} />}
    </div>
  )
}