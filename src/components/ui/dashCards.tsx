import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface DashCardsProps {
  title : string,
  description : string,
  count : number,
  icon : React.ReactNode,
};


export default function DashCards({title, description, count, icon}: DashCardsProps) {
  return (
    <div>
      <Card className=' w-80 bg-gradient-to-t from-violet-300 to-transparent to-60% drop-shadow-md'>
        <CardHeader>
          <div className=' flex flex-row justify-between'>
            <CardTitle>{title}</CardTitle>
            {icon && <div>{icon}</div>}
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-2xl font-semibold'>{count}</p>
        </CardContent>
      </Card>
    </div>
  )
}



