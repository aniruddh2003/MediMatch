"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TimerIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";


function BookAppointmnet() {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTimeSlot,setSelectedTimeSlot] = useState("");

  useEffect(() => {
    let frameworks = [];
    for (let i = 9; i < 12; i++) {
      frameworks.push(i + ":00 AM");
      frameworks.push(i + ":30 AM");
    }
    for (let i = 1; i < 12; i++) {
      frameworks.push(i + ":00 PM");
      frameworks.push(i + ":30 PM");
    }
    setTimeSlot(frameworks);
  }, []);
  return (
    <Dialog className="p-8">
      <DialogTrigger asChild>
        <Button className="mt-3">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-bold text-center text-2xl">
            Book Appointment
          </DialogTitle>
          <DialogDescription className="flex flex-col">
            <div className="flex gap-8 items-center justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="flex flex-col gap-2">
                <h2 className="flex gap-2 items-center">
                  <TimerIcon className="text-primary" />
                  Select Time
                </h2>
                <Select onValueChange={(value) => setSelectedTimeSlot(value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent className="h-60">
                    {timeSlot?.map((item, index) => (
                      <SelectItem
                        value={item}
                        key={index}
                        onClick={() => setSelectedTimeSlot(item)}
                      >
                        <h2>{item}</h2>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Textarea placeholder="Type your note here." className="w-[95%] m-4 flex items-center justify-center"/>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            className="text-red-500 border-red-500"
          >
            Close
          </Button>
          <Button type="submit" disabled={!(date && selectedTimeSlot !== "")}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default BookAppointmnet;
