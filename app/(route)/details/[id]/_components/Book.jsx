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
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Book = ({ doctor }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [time, setTime] = useState();
  const [note, setNote] = useState("");
  const bookRef = useRef(null);

  useEffect(() => {
    TimeGenerate();
  }, []);

  // توليد أوقات الحجز
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
    // إزالة آخر توقيت إذا رغبت
    // timeList.pop(); 
    setTimeSlot(timeList);
  };

  // تعطيل الأيام الماضية
  const checkDisable = (day) => {
    // يتم تعطيل اليوم إذا كان تاريخه قبل "اليوم الحالي"
    return day < new Date(new Date().setHours(0, 0, 0, 0));
  };

  const handleSubmit = () => {
    // تجميع البيانات الوهمية
    const data = {
      Username: "Guest User", // اسم مستخدم وهمي
      Email: "guest@example.com", // ايميل وهمي
      Note: note,
      Date: date,
      Time: time,
      doctor: doctor, // بيانات الطبيب الممررة
    };

    // 1. طباعة البيانات في الكونسول بدلاً من إرسالها للـ API
    console.log("✅ Mock Booking Data:", data);

    // 2. إظهار رسالة نجاح
    toast({
      title: "Success!",
      description: "Booking Confirmation Sent To Email (Mock)",
      className: "bg-green-500 text-white"
    });

    // 3. إغلاق النافذة تلقائياً
    if (bookRef.current) {
      bookRef.current.click();
    }
    
    // تفريغ الحقول (اختياري)
    setNote("");
    setTime(null);
  };

  return (
    <>
      <div className="z-50 relative"> 
      {/* أضفت div wrapper لضمان ظهور التوست فوق كل شيء */}
       <Toaster />
      </div>
      
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-start w-full">
             <Button className="mt-5 rounded-full w-full md:w-auto">Book Appointment</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-primary">Book Appointment</DialogTitle>
          </DialogHeader>
          
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* التقويم */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex gap-2 items-center">
                <C size={20} className="text-primary" />
                <p className="font-semibold">Select Day</p>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={checkDisable}
                className="rounded-md border shadow-sm bg-slate-50"
              />
            </div>

            {/* الوقت والملاحظات */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <Timer size={20} className="text-primary" />
                <p className="font-semibold">Select Time</p>
              </div>
              
              {/* شبكة الأوقات */}
              <div className="border-[1px] rounded-lg p-2 grid gap-2 grid-cols-3 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                {timeSlot &&
                  timeSlot.map((item, index) => {
                    return (
                      <p
                        key={index}
                        onClick={() => setTime(item)}
                        className={`${
                          time === item ? "bg-primary text-white" : "bg-white hover:bg-gray-100"
                        } border-[1px] text-[12px] rounded-full p-2 text-center transition-all cursor-pointer`}
                      >
                        {item}
                      </p>
                    );
                  })}
              </div>
              
              {/* حقل الملاحظات */}
              <div className="mt-2">
                  <Textarea
                    placeholder="Write a note here..."
                    className="resize-none bg-slate-50"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-2 sm:justify-end mt-4">
            <DialogClose asChild>
              <Button
                ref={bookRef}
                type="button"
                variant="outline"
                className="text-red-500 border-red-500 hover:bg-red-50"
              >
                Close
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={!(date && time)}
              onClick={handleSubmit}
            >
              Confirm Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Book;