interface IMemberStats {
  tasksCompleted: number;
  tasksAssigned: number;
}

export function calculateSimplePerformance(stats: IMemberStats): number {
  const { tasksCompleted, tasksAssigned } = stats;

  if (tasksAssigned === 0) return 0;

  const completionRate = (tasksCompleted / tasksAssigned) * 100;
  return Math.round(Math.min(completionRate, 100));
}
