"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThumbsDownIcon, StarIcon, AlertTriangleIcon, SearchIcon, UsersIcon, FilterIcon, MoreVertical } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Mock data for demonstration
const companies = [
  {
    id: 1,
    name: "Scam Co. Ltd.",
    description: "Known for phishing attempts and identity theft.",
    negativeScore: 85,
    googleRating: 1.2,
    reportedCases: 1243,
    logo: "https://img.logoipsum.com/296.svg"
  },
  {
    id: 2,
    name: "Fraud Enterprises Inc.",
    description: "Involved in pyramid schemes and fake job offers.",
    negativeScore: 92,
    googleRating: 1.5,
    reportedCases: 3017,
    logo: "https://img.logoipsum.com/327.svg"
  },
  {
    id: 3,
    name: "Deceptive Solutions LLC",
    description: "Offers fake tech support and software scams.",
    negativeScore: 78,
    googleRating: 1.8,
    reportedCases: 892,
    logo: "https://img.logoipsum.com/331.svg"
  },
  {
    id: 4,
    name: "Bogus Financial Services",
    description: "Engages in investment fraud and Ponzi schemes.",
    negativeScore: 88,
    googleRating: 1.3,
    reportedCases: 2156,
    logo: "https://img.logoipsum.com/299.svg"
  },
  {
    id: 5,
    name: "Sham Products Co.",
    description: "Sells counterfeit goods and runs fake online stores.",
    negativeScore: 82,
    googleRating: 1.6,
    reportedCases: 1578,
    logo: "https://img.logoipsum.com/231.svg"
  }
]

export default function Layout() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("negativeScore")
  const [minNegativeScore, setMinNegativeScore] = useState(0)
  const [showHighRisk, setShowHighRisk] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filteredAndSortedCompanies = companies
    .filter(company =>
      (company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      company.negativeScore >= minNegativeScore &&
      (!showHighRisk || company.negativeScore > 80)
    )
    .sort((a, b) => {
      if (sortOrder === "negativeScore") return b.negativeScore - a.negativeScore
      if (sortOrder === "reportedCases") return b.reportedCases - a.reportedCases
      return b.googleRating - a.googleRating
    })

  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Fraud Company Directory</h1>

        <div className="flex flex-col lg:flex-row gap-5">
          <aside className={`lg:w-64 bg-white p-6 rounded-lg shadow-md ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="minNegativeScore" className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Negative Score
                </label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="minNegativeScore"
                    min={0}
                    max={100}
                    step={1}
                    value={[minNegativeScore]}
                    onValueChange={(value) => setMinNegativeScore(value[0])}
                  />
                  <span className="text-sm text-gray-500">{minNegativeScore}%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="showHighRisk" className="text-sm font-medium text-gray-700">
                  Show High Risk Only
                </label>
                <Switch
                  id="showHighRisk"
                  checked={showHighRisk}
                  onCheckedChange={setShowHighRisk}
                />
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-[42px] leading-6 bg-white shadow-none"
                />
                <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-full md:w-[200px] h-[42px] bg-white shadow-none">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="negativeScore">Negative Score</SelectItem>
                  <SelectItem value="reportedCases">Reported Cases</SelectItem>
                  <SelectItem value="googleRating">Google Rating</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <FilterIcon className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredAndSortedCompanies.map(company => (
                <Card key={company.id} className="w-full bg-white border border-gray-200 rounded-lg shadow">
                  <CardHeader className="w-full flex justify-end px-4 pt-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="ms-auto h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Report Information</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Flag as Dangerous</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardHeader>

                  <CardContent className="flex flex-col items-center pb-10">
                    <Link href={`/companies/${company.id}`}>
                      <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={company.logo} width={96} height={96} alt={`${company.name} logo`} />
                    </Link>
                    <h5 className="mb-1 text-base font-semibold text-gray-900">
                      <Link href={`/companies/${company.id}`}>{company.name}</Link></h5>
                    <span className="text-xs text-center text-gray-500">{company.description}</span>
                    <div className="flex mt-4 space-x-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge variant="destructive" className="flex items-center">
                              <ThumbsDownIcon className="mr-1 h-4 w-4" />
                              {company.negativeScore}%
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Negative score based on user reports and investigations</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <Badge variant="secondary" className="flex items-center">
                        <StarIcon className="mr-1 h-4 w-4 text-yellow-400" />
                        {company.googleRating.toFixed(1)}
                      </Badge>
                      <Badge variant="outline" className="flex items-center">
                        <UsersIcon className="mr-1 h-4 w-4" />
                        {company.reportedCases}
                      </Badge>
                    </div>
                    <div className="flex mt-4 md:mt-6">
                      <Button className="mr-2">
                        <AlertTriangleIcon className="mr-2 h-4 w-4" />
                        Report
                      </Button>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
