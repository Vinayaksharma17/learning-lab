/**
 * Problem: Given a set of activities, each with a start and finish time, select the
 * maximum number of non-overlapping activities.
 *
 * Greedy Choice: Always select the activity that finishes earliest. This leaves the
 * maximum time available for other activities.
 */

type Activity = { start: number; finish: number }

function activitySelection(activities: Activity[]) {
  //sort activities by their finish times
  activities.sort((a, b) => a.finish - b.finish)

  let selectedActivities: Activity[] = []

  if (activities.length > 0) {
    // Select the first activity (which has the earliest finish time)
    selectedActivities.push(activities[0])
    let lastFinishTime = activities[0].finish

    // Iterate through the remaining activities
    for (let i = 1; i < activities.length; i++) {
      // If the current activity's start time is after or equal to the last
      // selected activity's finish time
      if (activities[i].start >= lastFinishTime) {
        selectedActivities.push(activities[i])
        lastFinishTime = activities[i].finish
      }
    }
  }
  return selectedActivities
}

// Example Usage:
const activities = [
  { start: 1, finish: 4 },
  { start: 3, finish: 5 },
  { start: 0, finish: 6 },
  { start: 5, finish: 7 },
  { start: 3, finish: 8 },
  { start: 5, finish: 9 },
  { start: 6, finish: 10 },
  { start: 8, finish: 11 },
  { start: 8, finish: 12 },
  { start: 2, finish: 13 },
  { start: 12, finish: 14 },
]

console.log(
  'Selected Activities (Activity Selection):',
  activitySelection(activities)
)
