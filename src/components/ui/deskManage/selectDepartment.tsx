import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select"

export function SelectDepartment() {
  return (
    <Select >
      <SelectTrigger className="w-full border border-black">
        <SelectValue placeholder="Select a Deparment" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Departments</SelectLabel>
          <SelectItem value="Department1">Department</SelectItem>
          <SelectItem value="Department2">Department</SelectItem>
          <SelectItem value="Department3">Department</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
