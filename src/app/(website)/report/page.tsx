"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ReportCompanyPage() {
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Here you would typically send the form data to your backend
        // For this example, we'll just set formSubmitted to true
        setFormSubmitted(true)
    }

    return (
        <>
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Report a Company</h1>

                {formSubmitted ? (
                    <Alert className="mb-8">
                        <CheckCircle2 className="h-4 w-4" />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>
                            Your report has been submitted successfully. We appreciate your contribution to keeping our community safe.
                        </AlertDescription>
                    </Alert>
                ) : (
                    <Card>
                        <CardHeader>
                            <CardTitle>Company Report Form</CardTitle>
                            <CardDescription>
                                Please provide as much detail as possible about the potentially fraudulent company.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="companyName">Company Name</Label>
                                            <Input id="companyName" placeholder="Enter company name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="website">Company Website</Label>
                                            <Input id="website" type="url" placeholder="https://example.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="fraudType">Type of Fraud</Label>
                                        <Select required>
                                            <SelectTrigger id="fraudType">
                                                <SelectValue placeholder="Select fraud type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="phishing">Phishing</SelectItem>
                                                <SelectItem value="identity_theft">Identity Theft</SelectItem>
                                                <SelectItem value="pyramid_scheme">Pyramid Scheme</SelectItem>
                                                <SelectItem value="fake_products">Fake Products</SelectItem>
                                                <SelectItem value="investment_fraud">Investment Fraud</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description of Fraudulent Activity</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Please provide details about the fraudulent activity"
                                            required
                                            className="min-h-[100px]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="yourName">Your Name (Optional)</Label>
                                            <Input id="yourName" placeholder="Enter your name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Your Email (Optional)</Label>
                                            <Input id="email" type="email" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Important</AlertTitle>
                                        <AlertDescription>
                                            Please ensure all information provided is accurate. False reports may have legal consequences.
                                        </AlertDescription>
                                    </Alert>
                                </div>
                                <CardFooter className="flex justify-end mt-6 px-0">
                                    <Button type="submit">Submit Report</Button>
                                </CardFooter>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </main>
        </>
    )
}
