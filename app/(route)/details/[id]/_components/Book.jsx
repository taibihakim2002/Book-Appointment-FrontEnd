"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Calendar as C, Timer } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Book = ({ userEmail, doctor }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [time, setTime] = useState();
  const [note, setNote] = useState();
  const bookRef = useRef(null);
  console.log(note);
  useEffect(() => {
    TimeGenerate();
  }, []);

  const TimeGenerate = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push(`${i < 10 ? `0${i}` : i}:00 AM`);
      timeList.push(`${i < 10 ? `0${i}` : i}:30 AM`);
    }
    for (let i = 13; i <= 18; i++) {
      timeList.push(`${i < 10 ? `0${i}` : i}:00 PM`);
      timeList.push(`${i < 10 ? `0${i}` : i}:30 PM`);
    }
    timeList.pop();
    setTimeSlot(timeList);
  };
  const checkDesable = (day) => {
    return day < new Date();
  };
  const handleSubmit = () => {
    const data = {
      data: {
        Username: userEmail,
        Email: userEmail,
        Note: note,
        Date: date,
        Time: time,
        doctor: doctor,
      },
    };
    GlobalApi.setAppointment(data)
      .then((res) => {
        console.log(res);
        toast({ description: "Booking Confirmation Send To Email" });
        bookRef.current.click();
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        bookRef.current.click();
        console.log(error);
      });
  };
  return (
    <>
      <Toaster />
      <Dialog>
        <DialogTrigger className="flex justify-start">
          <Button className="mt-5">Book Appointment</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
          </DialogHeader>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <C size={20} className="text-primary" />
                <p>Select Day</p>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={checkDesable}
                className="rounded-md border w-full flex justify-center"
              />
            </div>
            <div>
              <div className="flex gap-2 items-center mb-4">
                <Timer size={20} className="text-primary" />

                <p>Select Time</p>
              </div>
              <div className="border-[1px] rounded-lg p-2 grid gap-2 grid-cols-3">
                {timeSlot &&
                  timeSlot.map((item, index) => {
                    return (
                      <p
                        key={index}
                        onClick={() => {
                          setTime(item);
                        }}
                        className={`${
                          time === item ? "bg-primary text-white" : ""
                        } border-[1px] text-[13px] rounded-full p-2 text-center hover:bg-primary hover:text-white transition-all cursor-pointer`}
                      >
                        {item}
                      </p>
                    );
                  })}
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <Textarea
                placeholder="Note..."
                onChange={(e) => {
                  setNote(e.target.value);
                }}
              />
            </div>
          </div>
          <DialogFooter className="flex gap-1">
            <Button
              type="submit"
              disabled={!(date && time)}
              onClick={handleSubmit}
            >
              Confirm
            </Button>
            <DialogClose asChild>
              <Button
                ref={bookRef}
                type="button"
                className="border-[1px] border-red-500 text-red-500 bg-white"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Book;
