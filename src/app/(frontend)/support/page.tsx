"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Globe, Share2, MessageCircle } from "lucide-react";

const complaintSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(11, "Valid phone number required"),
  connectionId: z.string().min(4, "Connection ID is required"),
  type: z.string().min(1, "Please select a complaint type"),
  message: z.string().min(10, "Please provide more details"),
});

type ComplaintFormValues = z.infer<typeof complaintSchema>;

export default function SupportPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ComplaintFormValues>({
    resolver: zodResolver(complaintSchema),
  });

  const onSubmit = async (data: ComplaintFormValues) => {
    try {
      const response = await fetch("/api/complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Complaint submitted successfully! We will get back to you soon.");
      } else {
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      {/* Header */}
      <section className="bg-[#051d40] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Help & Support
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Get in touch with our team or raise a service request. We&apos;re here 24/7 to keep you connected.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="contact" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="contact">Contact Info</TabsTrigger>
            <TabsTrigger value="complaint">Raise a Complaint</TabsTrigger>
          </TabsList>

          {/* Tab 1: Contact Info */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Corporate Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  123 Agrabad Commercial Area<br />
                  Chittagong, 4100<br />
                  Bangladesh
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p><strong>Hotline:</strong> +880-31-2850085</p>
                  <p><strong>Support:</strong> 09612-123456</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-accent" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p><strong>Support:</strong> support@colbd.com</p>
                  <p><strong>Sales:</strong> sales@colbd.com</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    Hours & Socials
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p><strong>Network Support:</strong> 24/7/365</p>
                  <div className="flex gap-4 pt-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Globe className="h-5 w-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Share2 className="h-5 w-5" /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><MessageCircle className="h-5 w-5" /></a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Raise a Complaint */}
          <TabsContent value="complaint">
            <Card>
              <CardHeader>
                <CardTitle>Submit a Service Request</CardTitle>
                <CardDescription>Fill out the form below and our technical team will address it promptly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="John Doe" {...register("fullName")} />
                      {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="01712345678" {...register("phone")} />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="connectionId">Connection/User ID</Label>
                      <Input id="connectionId" placeholder="COL-12345" {...register("connectionId")} />
                      {errors.connectionId && <p className="text-sm text-destructive">{errors.connectionId.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Complaint Type</Label>
                      <Select onValueChange={(val: string | null) => val && setValue("type", val)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no_internet">No Internet Connection</SelectItem>
                          <SelectItem value="slow_speed">Slow Speed / Buffering</SelectItem>
                          <SelectItem value="billing">Billing Issue</SelectItem>
                          <SelectItem value="relocation">Connection Relocation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.type && <p className="text-sm text-destructive">{errors.type.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Detailed Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe the issue you are facing in detail..." 
                      className="min-h-[120px]"
                      {...register("message")}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Complaint"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
