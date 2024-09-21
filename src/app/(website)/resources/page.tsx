import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Link as LinkIcon, PhoneCall } from 'lucide-react'


export default function ResourcesPage() {

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Resources</h1>

      <Tabs defaultValue="educational" className="space-y-4">
        <TabsList>
          <TabsTrigger value="educational">Educational Materials</TabsTrigger>
          <TabsTrigger value="reports">Reports & Statistics</TabsTrigger>
          <TabsTrigger value="links">Useful Links</TabsTrigger>
          <TabsTrigger value="help">Get Help</TabsTrigger>
        </TabsList>

        <TabsContent value="educational">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Common Fraud Types</CardTitle>
                <CardDescription>Learn about various types of fraud and how to identify them.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identity Theft</li>
                  <li>Phishing Scams</li>
                  <li>Investment Fraud</li>
                  <li>Pyramid Schemes</li>
                  <li>Fake Online Stores</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Protecting Yourself Online</CardTitle>
                <CardDescription>Tips for staying safe in the digital world.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use strong, unique passwords</li>
                  <li>Enable two-factor authentication</li>
                  <li>Be cautious of unsolicited emails</li>
                  <li>Keep software and systems updated</li>
                  <li>Use secure, encrypted connections</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Red Flags to Watch For</CardTitle>
                <CardDescription>Warning signs that may indicate fraudulent activity.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Unsolicited contact or offers</li>
                  <li>Pressure to act quickly</li>
                  <li>Requests for personal information</li>
                  <li>Promises of unrealistic returns</li>
                  <li>Poor grammar or spelling in communications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Annual Fraud Report 2023</CardTitle>
                <CardDescription>Comprehensive analysis of fraud trends and statistics for the past year.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quarterly Fraud Insights</CardTitle>
                <CardDescription>Regular updates on emerging fraud trends and prevention strategies.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Q1 2023 Report</li>
                  <li>Q2 2023 Report</li>
                  <li>Q3 2023 Report</li>
                  <li>Q4 2023 Report (Coming Soon)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="links">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Government Resources</CardTitle>
                <CardDescription>Official fraud prevention and reporting resources.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.ftc.gov/scams" className="flex items-center text-blue-600 hover:underline">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Federal Trade Commission - Scam Alerts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.usa.gov/identity-theft" className="flex items-center text-blue-600 hover:underline">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      USA.gov - Identity Theft
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Consumer Protection Organizations</CardTitle>
                <CardDescription>Non-profit organizations dedicated to protecting consumers.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.consumer.ftc.gov/" className="flex items-center text-blue-600 hover:underline">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Consumer Information (FTC)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bbb.org/scamtracker" className="flex items-center text-blue-600 hover:underline">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Better Business Bureau Scam Tracker
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="help">
          <Card>
            <CardHeader>
              <CardTitle>Need Immediate Assistance?</CardTitle>
              <CardDescription>If you believe you&apos;ve been a victim of fraud, here&apos;s what you can do:</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <PhoneCall className="mr-2 h-5 w-5 mt-0.5 text-green-600" />
                  <div>
                    <strong>Contact Law Enforcement:</strong> File a report with your local police department or relevant authorities.
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="mr-2 h-5 w-5 mt-0.5 text-blue-600" />
                  <div>
                    <strong>Report to FraudGuard:</strong> Use our <Link href="/report" className="text-blue-600 hover:underline">Report a Company</Link> form to alert us about the fraudulent activity.
                  </div>
                </li>
                <li className="flex items-start">
                  <BookOpen className="mr-2 h-5 w-5 mt-0.5 text-purple-600" />
                  <div>
                    <strong>Seek Legal Advice:</strong> Consider consulting with a lawyer specializing in fraud cases.
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Button>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Contact Our Helpline
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
