"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, ThumbsDown, ThumbsUp, Star, Flag, MapPin, Globe, Phone, Mail, Clock } from 'lucide-react'

// This would typically come from an API or database
const companyData = {
  id: 1,
  name: "TechGlobe Solutions",
  logo: "https://img.logoipsum.com/296.svg",
  coverImage: "/placeholder.svg?height=400&width=1200",
  industry: "Information Technology",
  founded: 2010,
  headquarters: "Dhaka, Bangladesh",
  website: "www.techglobesolutions.com",
  phone: "+880 2 9852654",
  email: "info@techglobesolutions.com",
  employees: 500,
  revenue: "$50M",
  fraudScore: 75,
  rating: 2.1,
  totalReviews: 128,
  positiveReviews: 28,
  negativeReviews: 100,
  history: [
    { year: 2010, event: "Company founded" },
    { year: 2015, event: "Expanded operations to Southeast Asia" },
    { year: 2018, event: "First reported fraud case" },
    { year: 2020, event: "Major data breach affecting 100,000 customers" },
    { year: 2022, event: "CEO resigned amid fraud allegations" }
  ],
  testimonials: [
    { id: 1, name: "John D.", rating: 1, comment: "Terrible experience. Lost a significant amount of money due to their fraudulent practices." },
    { id: 2, name: "Sarah M.", rating: 2, comment: "Poor customer service and suspicious billing practices. Wouldn't recommend." },
    { id: 3, name: "Alex K.", rating: 3, comment: "Mixed experience. Some good products, but questionable business ethics." }
  ],
  background: "TechGlobe Solutions was founded in 2010 with the promise of revolutionizing IT services in Bangladesh. Initially praised for its innovative approaches, the company quickly expanded its operations across Southeast Asia. However, as it grew, reports of unethical practices began to surface. In 2018, the first major fraud case was reported, followed by a significant data breach in 2020 that affected 100,000 customers. The company's reputation took a severe hit, culminating in the CEO's resignation in 2022 amidst mounting fraud allegations. Despite these setbacks, TechGlobe continues to operate, though under intense scrutiny from regulators and consumers alike."
}

export default function CompanyDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-64 bg-gray-900">
        <Image
          src={companyData.coverImage}
          alt={`${companyData.name} cover`}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Image
              src={companyData.logo}
              alt={`${companyData.name} logo`}
              width={100}
              height={100}
              className="mx-auto rounded-full bg-white p-2"
            />
            <h1 className="mt-4 text-4xl font-bold text-white">{companyData.name}</h1>
            <p className="mt-2 text-xl text-gray-300">{companyData.industry}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="background">Background</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      TechGlobe Solutions is an Information Technology company founded in 2010. Despite initial success and expansion,
                      the company has faced significant challenges and controversies in recent years, including fraud allegations and
                      a major data breach. The high fraud score and low customer ratings indicate serious concerns about the company&apos;s
                      practices and reliability.
                    </p>
                    <h3 className="font-semibold text-lg mb-2">Fraud Alerts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                        <span>Multiple reports of unauthorized charges</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                        <span>Allegations of misleading advertising practices</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                        <span>Ongoing investigation into data privacy violations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="background">
                <Card>
                  <CardHeader>
                    <CardTitle>Company Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{companyData.background}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle>Company History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {companyData.history.map((event, index) => (
                        <li key={index} className="flex items-start">
                          <Badge variant="outline" className="mr-2 mt-1">
                            {event.year}
                          </Badge>
                          <span>{event.event}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="testimonials">
                <Card>
                  <CardHeader>
                    <CardTitle>User Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {companyData.testimonials.map((testimonial) => (
                        <li key={testimonial.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                          <div className="flex items-center mb-2">
                            <Avatar className="w-10 h-10 mr-2">
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{testimonial.name}</p>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${star <= testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                      }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{testimonial.comment}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>

          <aside className="lg:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fraud Score</CardTitle>
                <CardDescription>Based on user reports and investigations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Progress value={companyData.fraudScore} className="w-full" />
                  <span className="text-2xl font-bold">{companyData.fraudScore}%</span>
                </div>
                <p className="mt-2 text-sm text-red-600">High Risk</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Company Rating</CardTitle>
                <CardDescription>Based on {companyData.totalReviews} reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold">{companyData.rating.toFixed(1)}</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${star <= Math.round(companyData.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 mt-2">
                  <Badge variant="secondary" className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {companyData.positiveReviews}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    {companyData.negativeReviews}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Company Details</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gray-500" />
                    <span>Founded in {companyData.founded}</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                    <span>{companyData.headquarters}</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-gray-500" />
                    <a href={`https://${companyData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {companyData.website}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-gray-500" />
                    <span>{companyData.phone}</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-gray-500" />
                    <a href={`mailto:${companyData.email}`} className="text-blue-600 hover:underline">
                      {companyData.email}
                    </a>
                  </li>
                </ul>
                <Separator className="my-4" />
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="font-medium">Employees:</dt>
                    <dd>{companyData.employees.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Revenue:</dt>
                    <dd>{companyData.revenue}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <Button variant="destructive" className="w-full flex items-center justify-center">
              <Flag className="w-4 h-4 mr-2" />
              Report This Company
            </Button>
          </aside>
        </div>
      </div>
    </div>
  )
}
