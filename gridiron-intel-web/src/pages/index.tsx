import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Play, Users, TrendingUp, Clock, DollarSign, Check, ChevronRight, Film, Brain, Zap, Shield, Star, Menu, X, PlayCircle, PauseCircle, SkipForward, SkipBack, Maximize2 } from 'lucide-react';

const GridironIntel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPlan, setSelectedPlan] = useState('team');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlay, setCurrentPlay] = useState(0);

  const performanceData = [
    { week: 'W1', yards: 285, points: 21 },
    { week: 'W2', yards: 312, points: 28 },
    { week: 'W3', yards: 298, points: 24 },
    { week: 'W4', yards: 345, points: 35 },
    { week: 'W5', yards: 378, points: 31 },
  ];

  const formationData = [
    { name: 'I-Formation', value: 35, color: '#3b82f6' },
    { name: 'Shotgun', value: 45, color: '#10b981' },
    { name: 'Pistol', value: 15, color: '#f59e0b' },
    { name: 'Other', value: 5, color: '#6b7280' },
  ];

  const playBreakdown = [
    { type: 'Run', success: 68, total: 100 },
    { type: 'Pass', success: 72, total: 95 },
    { type: 'Play Action', success: 85, total: 30 },
    { type: 'Screen', success: 78, total: 25 },
  ];

  const detectedPlays = [
    { id: 1, time: '00:12', formation: 'Shotgun', playType: 'Pass', result: '+12 yards', confidence: 98 },
    { id: 2, time: '00:45', formation: 'I-Formation', playType: 'Run', result: '+4 yards', confidence: 95 },
    { id: 3, time: '01:23', formation: 'Pistol', playType: 'Play Action', result: '+28 yards', confidence: 92 },
    { id: 4, time: '02:01', formation: 'Shotgun', playType: 'Screen', result: '+8 yards', confidence: 96 },
  ];

  const features = [
    { icon: Brain, title: 'AI Film Analysis', desc: 'Automatically breaks down game film in minutes, not hours' },
    { icon: Zap, title: 'Instant Insights', desc: 'Get play-by-play analysis with formation detection' },
    { icon: TrendingUp, title: 'Performance Tracking', desc: 'Track player and team metrics across seasons' },
    { icon: Users, title: 'Parent Portal', desc: 'Share highlights and stats with parents automatically' },
  ];

  const plans = [
    {
      id: 'team',
      name: 'Team Pro',
      price: '$99',
      period: '/month',
      features: [
        'Unlimited game film uploads',
        'AI-powered play detection',
        'Formation & tendency analysis',
        'Player performance tracking',
        'Coaching staff accounts (10)',
        'Export to common formats',
        'Mobile app access',
      ],
      popular: true,
    },
    {
      id: 'parent',
      name: 'Parent+',
      price: '$9.99',
      period: '/month',
      features: [
        'Access to player highlights',
        'Individual performance stats',
        'Game notifications',
        'Share on social media',
        'Season highlight reel',
        'College recruiting package',
      ],
      popular: false,
    },
    {
      id: 'enterprise',
      name: 'District',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Team Pro',
        'Unlimited teams',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'Training & onboarding',
        'Data ownership',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Film className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">GridironIntel</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('analysis')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'analysis' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Film Analysis
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'pricing' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Pricing
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-green-700 font-medium">AI Active</span>
              </div>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => { setActiveTab('dashboard'); setIsMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Dashboard
            </button>
            <button
              onClick={() => { setActiveTab('analysis'); setIsMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Film Analysis
            </button>
            <button
              onClick={() => { setActiveTab('pricing'); setIsMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Pricing
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-4">AI-Powered Football Analytics</h1>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Save 20+ hours per week with automated film breakdown. Our AI watches your game film and delivers NFL-level analytics at 90% less cost than traditional platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">2.5M+</div>
                <div className="text-sm text-blue-100">Plays Analyzed</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-100">Accuracy Rate</div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">20hrs</div>
                <div className="text-sm text-blue-100">Saved Weekly</div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <Play className="w-8 h-8 text-blue-600" />
                <span className="text-sm text-green-600 font-medium">+12%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">847</div>
              <div className="text-sm text-gray-600">Plays Analyzed This Week</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-green-600" />
                <span className="text-sm text-green-600 font-medium">-95%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">45 min</div>
              <div className="text-sm text-gray-600">Avg. Analysis Time</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <span className="text-sm text-green-600 font-medium">+8%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">73%</div>
              <div className="text-sm text-gray-600">Win Rate Improvement</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-orange-600" />
                <span className="text-sm text-green-600 font-medium">-90%</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">$99</div>
              <div className="text-sm text-gray-600">vs $990 Hudl Premium</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="week" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="yards" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
                  <Line type="monotone" dataKey="points" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Formation Usage</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={formationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {formationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {formationData.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Play Success Rate */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Play Success Rate</h3>
            <div className="space-y-4">
              {playBreakdown.map((play) => (
                <div key={play.type}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{play.type}</span>
                    <span className="text-sm text-gray-600">{play.success}% success ({play.total} plays)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${play.success}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Film Analysis Tab */}
      {activeTab === 'analysis' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Video Player Mock */}
            <div className="relative bg-black aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <Film className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Game Film Viewer</p>
                  <p className="text-sm text-gray-400 mt-2">AI is analyzing play formations...</p>
                </div>
              </div>
              
              {/* Overlay UI */}
              <div className="absolute top-4 left-4 space-y-2">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  AI Detection: ON
                </div>
                <div className="bg-black/50 backdrop-blur text-white px-3 py-2 rounded-lg">
                  <div className="text-xs text-gray-300">Current Formation</div>
                  <div className="font-semibold">Shotgun 3WR</div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4">
                <button className="bg-black/50 backdrop-blur text-white p-2 rounded-lg hover:bg-black/70">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
              
              {/* Player Tracking Visualization */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="relative">
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        P{i}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-white hover:text-blue-400">
                      <SkipBack className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-blue-400"
                    >
                      {isPlaying ? <PauseCircle className="w-8 h-8" /> : <PlayCircle className="w-8 h-8" />}
                    </button>
                    <button className="text-white hover:text-blue-400">
                      <SkipForward className="w-6 h-6" />
                    </button>
                    <span className="text-white text-sm">00:45 / 03:24</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">Play 4 of 72</span>
                  </div>
                </div>
                <div className="mt-2 bg-white/20 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full" style={{ width: '22%' }} />
                </div>
              </div>
            </div>
            
            {/* Analysis Panel */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">AI-Detected Plays</h3>
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Powered by Computer Vision AI</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {detectedPlays.map((play) => (
                  <div
                    key={play.id}
                    onClick={() => setCurrentPlay(play.id)}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      currentPlay === play.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-500">{play.time}</div>
                        <div>
                          <div className="font-medium text-gray-900">{play.formation} - {play.playType}</div>
                          <div className="text-sm text-gray-600">Result: {play.result}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-sm text-gray-500">AI Confidence</div>
                          <div className="text-lg font-semibold text-green-600">{play.confidence}%</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">AI Insight</div>
                    <p className="text-sm text-gray-600 mt-1">
                      Your team shows 73% success rate on play-action from shotgun formation in the red zone. 
                      Consider increasing usage in similar situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Tab */}
      {activeTab === 'pricing' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">90% Less Than Hudl. 100% More Features.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get NFL-level analytics powered by AI at a fraction of the cost. No more spending weekends breaking down film manually.
            </p>
          </div>

          {/* Comparison Banner */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Why teams are switching from Hudl</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Automated analysis vs manual tagging</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>$99/month vs $990/month for similar features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>AI insights in 45 minutes vs 20+ hours of work</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 border border-green-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">$10,692</div>
                  <div className="text-sm text-gray-600">Saved per season</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-xl border-2 p-6 ${
                  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-blue-600 text-white'
                      : plan.popular
                      ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why GridironIntel?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">
                  "GridironIntel transformed our program. What used to take me entire weekends now happens automatically. 
                  The AI catches things I would have missed, and parents love getting highlight clips of their kids. 
                  We're saving over $10,000 a year compared to our old solution."
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Coach Mike Thompson</div>
                  <div className="text-sm text-gray-600">Lincoln High School - State Champions 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridironIntel;

