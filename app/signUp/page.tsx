  
 "use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

  

  const Signup = () => {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4 ">  
       <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black" >Sign Up</CardTitle>
          <CardDescription className="text-gray-600" >Create an account to start tracking job applications</CardDescription>
        </CardHeader>

        <form action="" className="space-y-4">
          <CardContent className="space-y-4" >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700" >Name</Label>
              <Input id="name" type="text" placeholder="John doe" className="border-gray-300 focus:border-primary focus:ring-primary h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700" >Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300 focus:border-primary focus:ring-primary h-12" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700" >Password</Label>
              <Input id="password" minLength={8} type="password" placeholder="John doe" className="border-gray-300 focus:border-primary focus:ring-primary h-12" required />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4" >
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12">Sign Up</Button>
            <p className="text-center text-sm text-gray-600">Already have an account ? <Link href='signIn' className="font-medium text-primary hover:underline" >Sign In</Link></p>
          </CardFooter>
        </form>
       </Card>
      </div>
    )
  }
  
  export default Signup
