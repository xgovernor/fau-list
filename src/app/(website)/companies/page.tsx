"use client"

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Search } from 'lucide-react'
import Link from 'next/link'

// This would typically come from an API or database
const companies = [
  { id: 1, name: "Grameen Bank", industry: "Banking", founded: 1983, employees: 21000, revenue: "$200M" },
  { id: 2, name: "BRAC", industry: "NGO", founded: 1972, employees: 97000, revenue: "$900M" },
  { id: 3, name: "Beximco Group", industry: "Conglomerate", founded: 1970, employees: 65000, revenue: "$1B" },
  { id: 4, name: "Square Pharmaceuticals", industry: "Pharmaceuticals", founded: 1958, employees: 9500, revenue: "$500M" },
  { id: 5, name: "Walton Group", industry: "Electronics", founded: 1977, employees: 30000, revenue: "$800M" },
  { id: 6, name: "Pran-RFL Group", industry: "Food & Beverage", founded: 1981, employees: 110000, revenue: "$750M" },
  { id: 7, name: "ACI Limited", industry: "Conglomerate", founded: 1968, employees: 7000, revenue: "$300M" },
  { id: 8, name: "Bashundhara Group", industry: "Conglomerate", founded: 1987, employees: 50000, revenue: "$2B" },
  { id: 9, name: "Summit Group", industry: "Power Generation", founded: 1985, employees: 6000, revenue: "$1.5B" },
  { id: 10, name: "Akij Group", industry: "Conglomerate", founded: 1950, employees: 35000, revenue: "$1B" },
]
type Companies = typeof companies;

type SortKeys = 'name' | 'industry' | 'founded' | 'employees' | 'revenue';
type SortOrder = 'ascn' | 'desc';

function sortCompanies(companies: Companies, sortKey: SortKeys, sortOrder: SortOrder) {
  return [...companies].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === 'ascn' ? -1 : 1
    if (a[sortKey] > b[sortKey]) return sortOrder === 'ascn' ? 1 : -1
    return 0
  })
}
export default function CompaniesPage() {
  const [sortKey, setSortKey] = useState<SortKeys>('name')
  const [sortOrder, setSortOrder] = useState<SortOrder>('ascn')
  const [searchTerm, setSearchTerm] = useState('')

  const sortedCompanies = sortCompanies(companies, sortKey, sortOrder)
  const filteredCompanies = sortedCompanies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSort = (key: SortKeys) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn')
    } else {
      setSortKey(key)
      setSortOrder('ascn')
    }
  }

  return (
    <div className="container p-2 mx-auto rounded-md sm:p-4  text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Companies in Bangladesh</h2>
      <div className="flex justify-between mb-4">
        <div className="relative w-64">
          <Input
            type="text"
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">
                <Button variant="ghost" onClick={() => handleSort('name')}>
                  Company Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('industry')}>
                  Industry
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" onClick={() => handleSort('founded')}>
                  Founded
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" onClick={() => handleSort('employees')}>
                  Employees
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" onClick={() => handleSort('revenue')}>
                  Revenue
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="font-medium">
                  <Link href={`/companies/${company.id}`} >{company.name}</Link>
                </TableCell>
                <TableCell>{company.industry}</TableCell>
                <TableCell className="text-right">{company.founded}</TableCell>
                <TableCell className="text-right">{company.employees.toLocaleString()}</TableCell>
                <TableCell className="text-right">{company.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
