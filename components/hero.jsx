"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

//user component(dynamic pages)

const HeroSection = () => {

    

  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-7xl pb-6 gradient-title">
                Manage Your Finances <br/> with Intelligence
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">An AI-powered financial management platform that helps you track,analyze, and optimize your spending with real- time insights.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="/Dashboard">
                    <Button size="lg" className="px-8">
                        Get Started</Button></Link>

                    <Link href="https://github.com/Mruk29/MoneyMate">
                    <Button size="lg" variant="outline" className="px-8">
                        Get Code</Button>
                        </Link>
                </div>
        </div>
        <div className="hero-image-wrapper mt-12">
            <div className="hero-image">
                <Image src='/banner.webp'
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg shawdow-2xl border mx-auto"
                priority
                />
            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
