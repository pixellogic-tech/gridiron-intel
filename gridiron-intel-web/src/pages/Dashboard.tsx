import { useQuery } from '@tanstack/react-query'
import StatsOverview from '@/components/dashboard/StatsOverview'
import RecentGames from '@/components/dashboard/RecentGames'
import PlayTypeChart from '@/components/charts/PlayTypeChart'
import { api } from '@/services/api'

export default function Dashboard() {
  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: api.getTeamStats,
  })

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      
      <StatsOverview stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlayTypeChart />
        <RecentGames />
      </div>
    </div>
  )
}